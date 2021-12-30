var head = document.getElementsByTagName('head')
var script = document.createElement('script')
script.setAttribute('src', 'https://code.jquery.com/jquery-1.12.4.min.js')
script.setAttribute('type', 'text/javascript')
script.addEventListener('load', function() {


    //↓利用規約
    
    $('.riyou').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
      
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
      $(this).addClass('close');//クラス名closeを付与
    }
  });
  
  
  

})
document.head.appendChild(script) 