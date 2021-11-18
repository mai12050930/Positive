const g_elementInputMessage = document.getElementById("input_nessage");
const g_elementListMessage = document.getElementById("list_message");

//WebSocketオブジェクト
let ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
const g_socket = new WebSocket(ws_scheme + "://" + window.location.host + "/ws/chat/");

//Sendボタンを押したときの処理
function onsubmitButton_Send(){
    //送信用テキストHTML要素からメッセージ文字列取得
    let strMessage = g_elementInputMessage.value;
    if(!strMessage){
        return;
    }

    //WebSocketを通したメッセージ送信
    g_socket.send(JSON.stringify({"message":strMessage}));

    //送信用テキストHTML要素の中身クリア
    g_elementInputMessage.value = "";
}

//WebSocketからメッセージ受信時の処理
g_socket.onmessage = (event) =>
{
    //テキストデータをJSONデータにデコード
    let data = JSON.parse(event.data);

    //メッセージの整形
    let strMessage = data["message"];

    //拡散されたメッセージをメッセージリストに追加
    let elementLi = document.createElement("li");
    elementLi.textContent = strMessage;
    g_elementListMessage.prepend(elementLi); //リストの一番上に追加
    //g_elementListMessage.append(elementLi); //リストの一番下に追加
}
    
//WebSocketクローズ時の処理
g_socket.onclose = (event) =>
{
    //ウェブページを閉じたとき以外のWebSocketクローズは想定外
    console.error("Unexpected : Chat socket closed.");
};