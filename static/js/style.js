var head = document.getElementsByTagName('head')
var script = document.createElement('script')

script.setAttribute('src', 'https://code.jquery.com/jquery-1.12.4.min.js')

script.setAttribute('type', 'text/javascript')
script.addEventListener('load', function() {
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

})
document.head.appendChild(script)