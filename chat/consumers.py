import json
# from channels.generic.websocket import WebsocketConsumer
from channels.generic.websocket import AsyncWebsocketConsumer
# from asgiref.sync import async_to_sync  # async_to_sync() :非同期関数を同期的に実行する際に使用
import datetime

#ChatConsumerクラス:WebSocketから受け取ったものを処理するクラス
class ChatConsumer(AsyncWebsocketConsumer):

    #コンストラクタ
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.strGroupName = ''
        self.strUserName = ''

    # WebSocket接続時の処理
    async def connect(self):
        #WebSocket接続を受け入れる
        await self.accept()

    async def disconnect(self, close_code):
        # グループから離脱
        await self.leave_chat()

    # WebSocketからデータ受信の処理
    async def receive(self, text_data):
        # 受信データをJSONデータに復元
        text_data_json = json.loads(text_data)

        #チャットへの参加処理
        if('join' == text_data_json.get('data_type')):
            #ユーザー名をクラスメンバー変数に設定
            self.strUserName = text_data_json['username']
            #チャットへの参加
            await self.join_chat()
        
        #チャットからの離脱処理
        elif('leave' == text_data_json.get('data_type')):
            #チャットから離脱
            await self.leave_chat()
        
        #メッセージ受信処理
        else:
            # メッセージの取り出し
            strMessage = text_data_json['message']

            # グループ内の全Consumerにメッセージ拡散送信(受信関数を'type'で指定)
            data = {
                'type': 'chat_message', #受信処理関数名
                'message': strMessage, #メッセージ
                'username': self.strUserName, #ユーザー名
                'datetime': datetime.datetime.now().strftime('%Y/%m/%d %H:%M:%S'), #現在時刻
            }
            await self.channel_layer.group_send(self.strGroupName, data)

    #拡散メッセージ受信時の処理
    async def chat_message(self, data):
        data_json = {
            'message': data['message'],
            'username': data['username'],
            'datetime': data['datetime'],
        }

        # WebSocketにメッセージ送信
        await self.send(text_data=json.dumps(data_json))

    #チャットへの参加
    async def join_chat(self):
        self.strGroupName = 'chat'
        await self.channel_layer.group_add(self.strGroupName, self.channel_name)

    #チャットからの離脱
    async def leave_chat(self):
        if(''==self.strGroupName):
            return
        
        #グループから離脱
        await self.channel_layer.group_discard(self.strGroupName, self.channel_name)

        #ルーム名を空に
        self.strGroupName = ''