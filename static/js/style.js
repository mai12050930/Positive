var head = document.getElementsByTagName('head')
var script = document.createElement('script')

script.setAttribute('src', 'https://code.jquery.com/jquery-1.12.4.min.js')

script.setAttribute('type', 'text/javascript')
script.addEventListener('load', function() {
    //↓スクロールアニメーション
$(function() {
    // スクロールしたときに実行
    $(window).scroll(function () {
       // 目的のスクロール量を設定(px)
       var TargetPos = 10;
       // 現在のスクロール位置を取得
       var ScrollPos = $(window).scrollTop();
       // 現在位置が目的のスクロール量に達しているかどうかを判断
       if( ScrollPos >= TargetPos) {
          // 達していれば表示
          $("#topbutton").fadeIn();
       }
       else {
          // 達していなければ非表示
          $("#topbutton").fadeOut();
       }
    });
 });

    //↓マウスアクション
 if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
    $(function(){
        var body = document.body;
        var cursor = document.createElement("div");
        var stalker = document.createElement("div");
        cursor.id = "cursor";
        stalker.id = "stalker";
        body.appendChild(cursor);
        body.appendChild(stalker);
        body.addEventListener("mousemove", function(e) {
              cursor.style.left = e.clientX + "px";
              cursor.style.top = e.clientY + "px";
              stalker.style.left = e.clientX + "px";
              stalker.style.top = e.clientY + "px";
        }, false);

        $("a").on("mouseenter", function() {
            $('#cursor').addClass("active");
            $('#stalker').addClass("active");
        });

        $("a").on("mouseleave", function() {
            $('#cursor').removeClass("active");
            $('#stalker').removeClass("active");
        });
    });
}

})
document.head.appendChild(script)