import json
from channels.generic.websocket import WebsocketConsumer

#ChatConsumerクラス:WebSocketから受け取ったものを処理するクラス
class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, console_code):
        pass

    def recieve(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        self.send(text_data=json.dumps({
            'message': message
        }))