import json
from channels.generic.websocket import WebsocketConsumer

#ChatConsumerクラス:WebSocketから受け取ったものを処理するクラス
class ChatConsumer(WebsocketConsumer):
    # WebSocket接続時の処理
    def connect(self):
        # グループに参加
        self.strGroupName = 'chat'
        async_to_sync(self.channel_layer.group_add)(self.strGroupName, self.channel_name)

        self.accept()

    def disconnect(self, console_code):
        # グループから離脱
        async_to_sync(self.channel_layer.group_discard)(self.strGroupName, self.channel_name)

    # WebSocketからデータ受信の処理
    def recieve(self, text_data):
        # 受信データをJSONデータに復元
        text_data_json = json.loads(text_data)

        # メッセージの取り出し
        strMessage = text_data_json['message']

        # グループ内の全Consumerにメッセージ拡散送信(受信関数を'type'で指定)
        data = {
            'type': 'chat_message', #受信処理関数名
            'message': strMessage, #メッセージ
        }
        async_to_sync(self.channel_layer.group_send)(self.strGroupName, data)

        #拡散メッセージ受信時の処理
        def chat_message(self, data):
            data_json = {
                'message': data['message'],
            }

        # WebSocketにメッセージ送信
        self.send(text_data=json.dumps(data_json))