window.onload = function() {
    draw();
};

function draw() {
    var title = "INIAD HUM"; //タイトル
    var startbt = "Play"; //スタートボタン
    var mouseX;
    var mouseY;
    var view = 0;

    //タイトル画面
    var canvas = document.getElementById("escape");
    if ( ! canvas || ! canvas.getContext ) { return false; }
    var context = canvas.getContext("2d");

    context.font = "20px 'Century Gothic'";
    context.fillText(title,110,100);
    context.fillText(startbt,250,250);

    //ボタンのクリック
    canvas.addEventListener("mousedown", mouseDownHandler, false);

    function mouseDownHandler(e) {
        var rect = e.target.getBoundingClientRect();
        mouseX = Math.floor(e.clientX - rect.left);
        mouseY = Math.floor(e.clientY - rect.top);
        if(view == 0) {
            if(mouseX > 250 && mouseX < 300) {
                if(mouseY > 230 && mouseY < 253) {
                    view = 1;
                    printView();
                }
            }
        }else if(view == 1){
            if(mouseX > 4 && mouseX < 25){
                if(mouseY > 185 && mouseY < 215){
                    view = 4;
                    printView();
                }
            }
            if(mouseX > 521 && mouseX < 546){
                if(mouseY > 185 && mouseY < 215){
                    view = 2;
                    printView();
                }
            }
        }else if(view == 2){
            if(mouseX > 4 && mouseX < 25){
                if(mouseY > 185 && mouseY < 215){
                    view = 1;
                    printView();
                }
            }
            if(mouseX > 521 && mouseX < 546){
                if(mouseY > 185 && mouseY < 215){
                    view = 3;
                    printView();
                }
            }
        }else if(view == 3){
            if(mouseX > 4 && mouseX < 25){
                if(mouseY > 185 && mouseY < 215){
                    view = 2;
                    printView();
                }
            }
            if(mouseX > 521 && mouseX < 546){
                if(mouseY > 185 && mouseY < 215){
                    view = 4;
                    printView();
                }
            }
        }else if(view == 4){
            if(mouseX > 4 && mouseX < 25){
                if(mouseY > 185 && mouseY < 215){
                    view = 3;
                    printView();
                }
            }
            if(mouseX > 521 && mouseX < 546){
                if(mouseY > 185 && mouseY < 215){
                    view = 1;
                    printView();
                }
            }
        }
    }

    canvas.onmousemove = mouseMoveListner;
	function mouseMoveListner(e) {
		//表示クリア
		context.clearRect(0, 0, 65, 32);
		//座標調整
		adjustXY(e);
		//テキストの描画
		context.globalAlpha = 1;
		context.fillStyle = "#666666";
		context.font = "12px Arial";
		context.fillText("X座標：" + mouseX, 5, 12);
		context.fillText("Y座標：" + mouseY, 5, 24);
		
		if(mouseX > 4 && mouseX < 25 && mouseY > 185 && mouseY < 215){
			document.body.style.cursor = "pointer";
		}else if(mouseX > 521 && mouseX < 546 && mouseY > 185 && mouseY < 215){
			document.body.style.cursor = "pointer";
		}else{
			document.body.style.cursor = "default";
		}
	}
	
	function adjustXY(e) {
		var rect = e.target.getBoundingClientRect();
		mouseX = e.clientX - rect.left;
		mouseY = e.clientY - rect.top;
	}

    //部屋の描画
    function printView() {
        var img = new Image();
        if(view == 1) {
            img.src = "../../static/images/view1.png";
            img.onload = function() {
                context.drawImage(img, 0, 0);
                moveBt();
                itemBar();
            }
        }else if(view == 2) {
            img.src = "../images/view2.png";
            img.onload = function() {
                context.drawImage(img, 0, 0);
                moveBt();
                itemBar();
            }
        }else if(view == 3) {
            img.src = "../images/view2.png";
            img.onload = function() {
                context.drawImage(img, 0, 0);
                moveBt();
                itemBar();
            }
        }else if(view == 4) {
            img.src = "../images/view2.png";
            img.onload = function() {
                context.drawImage(img, 0, 0);
                moveBt();
                itemBar();
            }
        }
    }

    function moveBt(){
        context.beginPath();
        context.moveTo(4, 200);
        context.lineTo(25, 185);
        context.lineTo(25, 215);
        context.closePath();
        /* 三角形を塗りつぶす */
        context.fillStyle = "#ffffff";
        context.fill();
        
        context.beginPath();
        context.moveTo(546, 200);
        context.lineTo(521, 185);
        context.lineTo(521, 215);
        context.closePath();
        /* 三角形を塗りつぶす */
        context.fillStyle = "#ffffff";
        context.fill();
    }
    
    function itemBar(){
        var about = "？";
        context.fillStyle = 'rgba(0, 0, 0, 0.5)';
        context.fillRect(0,0,550,35);
        context.beginPath();
        context.strokeStyle = "#ffffff";
        context.arc(530,17,17,0,2*Math.PI,true);
        context.stroke();
        context.fillStyle = "#ffffff";
        context.font = "30px 'ＭＳ ゴシック'";
        context.fillText(about,515,28);
    }
}
