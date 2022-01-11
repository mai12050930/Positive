var head = document.getElementsByTagName('head')
var script = document.createElement('script')
script.setAttribute('src', 'https://code.jquery.com/jquery-1.12.4.min.js')

script.setAttribute('type', 'text/javascript')
script.addEventListener('load', function() {

$(".input").focusin(function () {
    $(this).find("span").animate({ opacity: "0" }, 200);
  });
  
  $(".input").focusout(function () {
    $(this).find("span").animate({ opacity: "1" }, 300);
  });
  
  $(".login").submit(function () {
    $(this)
      .find(".submit i")
      .removeAttr("class")
      .addClass("fa fa-check")
      .css({ color: "#fff" });
    $(".submit").css({ background: "#2ecc71", "border-color": "#2ecc71" });
    $(".feedback").show().animate({ opacity: "1", bottom: "-80px" }, 400);
    $("input").css({ "border-color": "#2ecc71" });
    return false;
  });

})
document.head.appendChild(script) 