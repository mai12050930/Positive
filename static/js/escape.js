window.onload = function(){
	draw();
};

function draw(){
	var title = "INIAD HUM";
	var startbt = "Play";
	var mouseX; 
	var mouseY;
	var view = 0;


	//riddle frug
	var riddle1_f = 0;
	var riddle2_f = 0;
	var riddle3_f = 0;
	var riddle4_f = 0;
	var riddle5_f = 0;

	//object frug
	var door_f = 0; //120px:210px
	var clock_f = 0; //50px:50px
	var cage_f = 0; //120px:70px
	var window_f = 0; //140px:90px
	var mirror_f = 0; //100px:200px
	var chest_f = 0; //150px:140px
	var closet_f = 0; //140px:180px
	var refrigerator_f = 0; //130px:200px
	var ham_f = 0; //40px:35px
	var aquarium_f = 0; //140px:90px
	var switch_board_f = 0; //100px:60px
	var desk_f = 0; //210px:125px
	var chair1_f = 0; //75px:90px
	var chair2_f = 0; //75px:90px
	var calendar_f = 0; //70px:60px
	var star_f = 0; //30px:30px
	var paper_f = 0; //100px:26px

	var hum1_f = 0;
	var hum2_f = 0;
	var hum3_f = 0;
	var hum4_f = 0;
	var bossHum_f = 0;

	var messageWindow_f = 0;
	var message_cnt = 0;

	//playing cards cnt
	/*
	spade = 1
	heart = 2
	diamond = 3
	club = 4
	*/
	var mark1 = 1;
	var mark2 = 1;
	var mark3 = 1;
	var mark4= 1;

	//switch cnt
	var blueBar_cnt = 1;
	var redBar_cnt = 1;
	var greenBar_cnt = 1;
	var yellowBar_cnt = 1;

	//middle dial key 
	var keyArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
	var key1 = keyArray[0];
	var key2 = keyArray[0];
	var key3 = keyArray[0];

	var key1_index = 0;
	var key2_index = 0;
	var key3_index = 0;

	//lower dial key
	var keyArray1_low = ["し", "ふ", "い", "さ"];
	var keyArray2_low = ["き", "か", "め", "に"];
	var keyArray3_low = ["て", "ぬ", "も", "あ"];
	var keyArray4_low = ["す", "く", "き", "と"];

	var key1_low = keyArray1_low[0];
	var key2_low = keyArray2_low[0];
	var key3_low = keyArray3_low[0];
	var key4_low = keyArray4_low[0];

	var key1_low_index = 0;
	var key2_low_index = 0;
	var key3_low_index = 0;
	var key4_low_index = 0;



	var canvas = document.getElementById("escape");
	if ( ! canvas || ! canvas.getContext ) { return false; }
	var cx = canvas.getContext("2d");
	
	cx.font = "20px 'Century Gothic'";
	cx.fillText(title,220,100);
	cx.fillText(startbt,250,250);
	
	canvas.addEventListener("mousedown", mouseDownHandler, false);

	function mouseDownHandler(e) {
 		var rect = e.target.getBoundingClientRect();
 		mouseX =  Math.floor(e.clientX - rect.left);
		mouseY =  Math.floor(e.clientY - rect.top);
		

		if(view == 0){
			if(mouseX > 250 && mouseX < 300){
				if(mouseY > 230 && mouseY < 253){
					view = 1;
                    console.log("view = 1"); //debug
					printView();
				}
			}
		}else if(view == 1){
			if(mouseX > 4 && mouseX < 25){
				if(mouseY > 185 && mouseY < 215){
					view = 4;
                    console.log("view = 4"); //debug
					printView();
				}
			}
			if(mouseX > 521 && mouseX < 546){
				if(mouseY > 185 && mouseY < 215){
					view = 2;
                    console.log("view = 2"); //debug
					printView();
				}
			}
			//doorのフラグを座標のクリックで変更
			if(mouseX > 160 && mouseX < 280) {
				if(mouseY > 195 && mouseY < 400) {
					console.log("This is a door."); //debug
					if(bossHum_f == 2) {
						alert("ゲームクリア!");
						printView();
					}
				}
			}
			//clockのフラグを座標のクリックで変更
			if(mouseX > 70 && mouseX < 120) {
				if(mouseY > 100 && mouseY < 150) {
					console.log("This is a clock."); //debug
					//フラグ変化
				}
			}
			//cageのフラグを座標のクリックで変更
			if(mouseX > 20 && mouseX < 140) {
				if(mouseY > 330 && mouseY < 400) {
					console.log("This is a cage."); //debug
					if(cage_f == 1) {
						//riddle5へのフラグ更新
						view = 12;
						console.log("view = " + view);
						printView();
					}
				}
			}
			//windowのフラグを座標のクリックで変更
			if(mouseX > 330 && mouseX < 470) {
				if(mouseY > 180 && mouseY < 270) {
					console.log("This is a window."); //debug
					console.log("view = 11"); //debug
					view = 11;
					printView();
				}
			}
			//hum4のフラグを座標のクリックで変更
			if(mouseX > 390 && mouseX < 410) {
				if(mouseY > 370 && mouseY < 400) {
					console.log("You got a hum4.");
					hum4_f = 1;
					printView();
				}
			}
		}else if(view == 2){
			if(mouseX > 4 && mouseX < 25){
				if(mouseY > 185 && mouseY < 215){
					view = 1;
                    console.log("view = 1"); //debug
					printView();
				}
			}
			if(mouseX > 521 && mouseX < 546){
				if(mouseY > 185 && mouseY < 215){
					view = 3;
                    console.log("view = 3"); //debug
					printView();
				}
			}
			//mirrorのフラグを座標のクリックで変更
			if(mouseX > 225 && mouseX < 325) {
				if(mouseY > 203 && mouseY < 400) {
					console.log("This is a mirror."); //debug
					//フラグ変化
				}
			}
			//closetのフラグを座標のクリックで変更
			if(mouseX > 50 && mouseX < 190) {
				if(mouseY > 225 && mouseY < 400) {
					console.log("This is a closet."); //debug
					//フラグ変化
				}
			}
			//chestのフラグを座標のクリックで変更
			if(mouseX > 360 && mouseX < 510) {
				if(mouseY > 265 && mouseY < 400) {
					console.log("This is a chest."); //debug
					console.log("view = 21"); //debug
					view = 21;
					printView();
				}
			}
		}else if(view == 3){
			if(mouseX > 4 && mouseX < 25){
				if(mouseY > 185 && mouseY < 215){
					view = 2;
                    console.log("view = 2"); //debug
					printView();
				}
			}
			if(mouseX > 521 && mouseX < 546){
				if(mouseY > 185 && mouseY < 215){
					view = 4;
                    console.log("view = 4"); //debug
					printView();
				}
			}
			//aquariumのフラグを座標のクリックで変更
			if(mouseX > 330 && mouseX < 470) {
				if(mouseY > 150 && mouseY < 240) {
					console.log("This is a aquarium."); //debug
					//フラグ変化
				}
			}
			//refrigeratorのフラグを座標のクリックで変更
			if(mouseX > 80 && mouseX < 210) {
				if(mouseY > 200 && mouseY < 400) {
					console.log("This is a refrigerator."); //debug
					refrigerator_f = 1;
					printView();
				}
			}
			//hamのフラグを座標のクリックで変更
			if(mouseX > 130 && mouseX < 170) {
				if(mouseY > 265 && mouseY < 300) {
					console.log("You got a ham."); //debug
					ham_f = 1;
					printView();
				}
			}
			//mark1を座標のクリックで変更
			if(mouseX > 270 && mouseX < 320) {
				if(mouseY > 250 && mouseY < 300) {
					console.log("This is a mark1."); //debug
					mark1 += 1;
					console.log("mark1:" + mark1);
					if(ifRiddle2(mark1, mark2, mark3, mark4)) {
						riddle2_f = 1;
					}
					printView();
				}
			}
			//mark2を座標のクリックで変更
			if(mouseX > 330 && mouseX < 380) {
				if(mouseY > 250 && mouseY < 300) {
					console.log("This is a mark2."); //debug
					mark2 += 1;
					console.log("mark2:" + mark2);
					if(ifRiddle2(mark1, mark2, mark3, mark4)) {
						riddle2_f = 1;
					}
					printView();
				}
			}
			//mark3を座標のクリックで変更
			if(mouseX > 390 && mouseX < 440) {
				if(mouseY > 250 && mouseY < 300) {
					console.log("This is a mark3."); //debug
					mark3 += 1;
					console.log("mark3:" + mark3);
					if(ifRiddle2(mark1, mark2, mark3, mark4)) {
						riddle2_f = 1;
					}
					printView();
				}
			}
			//mark4を座標のクリックで変更
			if(mouseX > 450 && mouseX < 500) {
				if(mouseY > 250 && mouseY < 300) {
					console.log("This is a mark4."); //debug
					mark4 += 1;
					console.log("mark4:" + mark4);
					if(ifRiddle2(mark1, mark2, mark3, mark4)) {
						riddle2_f = 1;
					}
					printView();
				}
			}
			//hum2のフラグを座標のクリックで変更
			if(mouseX > 390 && mouseX < 410) {
				if(mouseY > 370 && mouseY < 400) {
					console.log("You got a hum2.");
					hum2_f = 1;
					printView();
				}
			}
		}else if(view == 4){
			if(mouseX > 4 && mouseX < 25){
				if(mouseY > 185 && mouseY < 215){
					view = 3;
                    console.log("view = 3"); //debug
					printView();
				}
			}
			if(mouseX > 521 && mouseX < 546){
				if(mouseY > 185 && mouseY < 215){
					view = 1;
                    console.log("view = 1"); //debug
					printView();
				}
			}
			//switch_boardのフラグを座標のクリックで変更
			if(mouseX > 100 && mouseX < 200) {
				if(mouseY > 250 && mouseY < 310) {
					console.log("This is a switch."); //debug
					console.log("view = 41"); //debug
					view = 41;
					printView();
				}
			}
			//deskのフラグを座標のクリックで変更
			if(mouseX > 260 && mouseX < 470) {
				if(mouseY > 250 && mouseY < 375) {
					console.log("This is a desk."); //debug
					//フラグ変化
				}
			}
			//chair1のフラグを座標のクリックで変更
			if(mouseX > 280 && mouseX < 355) {
				if(mouseY > 310 && mouseY < 400) {
					console.log("This is a chair1."); //debug
					//フラグ変化
				}
			}
			//chair2のフラグを座標のクリックで変更
			if(mouseX > 370 && mouseX < 445) {
				if(mouseY > 310 && mouseY < 400) {
					console.log("This is a chair2."); //debug
					//フラグ変化
				}
			}
			//calendarのフラグを座標のクリックで変更
			if(mouseX > 350 && mouseX < 420) {
				if(mouseY > 170 && mouseY < 230) {
					console.log("This is a calendar."); //debug
					//フラグ変化
				}
			}
			//starのフラグを座標のクリックで変更
			if(mouseX > 430 && mouseX < 460) {
				if(mouseY > 240 && mouseY < 270) {
					console.log("You got a star."); //debug
					star_f = 1;
					printView();
				}
			}
			//paperのフラグを座標のクリックで変更
			if(mouseX > 310 && mouseX < 410) {
				if(mouseY > 260 && mouseY < 286) {
					console.log("You got a paper."); //debug
					paper_f = 1;
					printView();
				}
			}
			//hum1のフラグを座標のクリックで変更
			if(mouseX > 490 && mouseX < 510){
				if(mouseY > 370 && mouseY < 400) {
					console.log("You got a hum1."); //debug
					hum1_f = 1;
					printView();
				}
			}
		}else if (view == 11) {
			if(mouseX > 14 && mouseX < 35) {
				if(mouseY > 360 && mouseY < 390) {
					view = 1;
					console.log("view = 1"); //debug
					printView();
				}
			}
		}else if (view == 12) {
			//backBtのクリック
			if(mouseX > 14 && mouseX < 35) {
				if(mouseY > 360 && mouseY < 390) {
					view = 1;
					console.log("view = 1"); //debug
					printView();
				}
			}
			//messageWindowのクリック
			if(mouseX > 50 && mouseX < 500) {
				if(mouseY > 100 && mouseY < 220) {
					message_cnt++;
					if(message_cnt == 3) {
						messageWindow_f = 1;
					}
					printView();
				}
			}

		}else if (view == 21) {
			//backBtのクリック
			if(mouseX > 14 && mouseX < 35) {
				if(mouseY > 360 && mouseY < 390) {
					view = 2;
					console.log("view = 2"); //debug
					printView();
				}
			}
			//middle dial key1
			if(mouseX > 165 && mouseX < 190) {
				if(mouseY > 188 && mouseY < 205) {
					var i;
					i = (key1_index+1) % 11;
					key1 = keyArray[i];
					key1_index++;
					if(ifRiddle3(key1, key2, key3)){
						riddle3_f = 1;
					}
					printView();
				}
			}
			if(mouseX > 165 && mouseX < 190) {
				if(mouseY > 255 && mouseY < 280) {
					var i;
					if(key1_index > 0) {
						i = (key1_index-1) % 11;
						key1 = keyArray[i];
						key1_index--;
					}
					if(ifRiddle3(key1, key2, key3)){
						riddle3_f = 1;
					}
					printView();
				}
			}
			//middle dial key2
			if(mouseX > 250 && mouseX < 275) {
				if(mouseY > 188 && mouseY < 205) {
					var i;
					i = (key2_index+1) % 11;
					key2 = keyArray[i];
					key2_index++;
					if(ifRiddle3(key1, key2, key3)){
						riddle3_f = 1;
					}
					printView();
				}
			}
			if(mouseX > 250 && mouseX < 275) {
				if(mouseY > 255 && mouseY < 280) {
					var i;
					if(key2_index > 0) {
						i = (key2_index-1) % 11;
						key2 = keyArray[i];
						key2_index--;
					}
					if(ifRiddle3(key1, key2, key3)){
						riddle3_f = 1;
					}
					printView();
				}
			}
			//middle dial key3
			if(mouseX > 330 && mouseX < 355) {
				if(mouseY > 188 && mouseY < 205) {
					var i;
					i = (key3_index+1) % 11;
					key3 = keyArray[i];
					key3_index++;
					if(ifRiddle3(key1, key2, key3)){
						riddle3_f = 1;
					}
					printView();
				}
			}
			if(mouseX > 330 && mouseX < 355) {
				if(mouseY > 255 && mouseY < 280) {
					var i;
					if(key3_index > 0) {
						i = (key3_index-1) % 11;
						key3 = keyArray[i];
						key3_index--;
					}
					if(ifRiddle3(key1, key2, key3)){
						riddle3_f = 1;
					}
					printView();
				}
			}

			//lower dial key1
			if(mouseX > 130 && mouseX < 160) {
				if(mouseY > 290 && mouseY < 305) {
					var i;
					i = (key1_low_index+1) % 4;
					key1_low = keyArray1_low[i];
					key1_low_index++;
					if(ifRiddle5(key1_low, key2_low, key3_low, key4_low)){
						riddle5_f = 1;
						riddle3_f = 2;
					}
					printView();
				}
			}
			if(mouseX > 130 && mouseX < 160) {
				if(mouseY > 358 && mouseY < 377) {
					var i;
					if(key1_low_index > 0) {
						i = (key1_low_index-1) % 4;
						key1_low = keyArray1_low[i];
						key1_low_index--;
					}
					if(ifRiddle5(key1_low, key2_low, key3_low, key4_low)){
						riddle5_f = 1;
						riddle3_f = 2;
					}
					printView();
				}
			}
			//lower dial key2
			if(mouseX > 210 && mouseX < 237) {
				if(mouseY > 290 && mouseY < 305) {
					var i;
					i = (key2_low_index+1) % 4;
					key2_low = keyArray2_low[i];
					key2_low_index++;
					if(ifRiddle5(key1_low, key2_low, key3_low, key4_low)){
						riddle5_f = 1;
						riddle3_f = 2;
					}
					printView();
				}
			}
			if(mouseX > 210 && mouseX < 237) {
				if(mouseY > 358 && mouseY < 377) {
					var i;
					if(key2_low_index > 0) {
						i = (key2_low_index-1) % 4;
						key2_low = keyArray2_low[i];
						key2_low_index--;
					}
					if(ifRiddle5(key1_low, key2_low, key3_low, key4_low)){
						riddle5_f = 1;
						riddle3_f = 2;
					}
					printView();
				}
			}
			//lower dial key3
			if(mouseX > 300 && mouseX < 327) {
				if(mouseY > 290 && mouseY < 305) {
					var i;
					i = (key3_low_index+1) % 4;
					key3_low = keyArray3_low[i];
					key3_low_index++;
					if(ifRiddle5(key1_low, key2_low, key3_low, key4_low)){
						riddle5_f = 1;
						riddle3_f = 2;
					}
					printView();
				}
			}
			if(mouseX > 300 && mouseX < 327) {
				if(mouseY > 358 && mouseY < 377) {
					var i;
					if(key3_low_index > 0) {
						i = (key3_low_index-1) % 4;
						key3_low = keyArray3_low[i];
						key3_low_index--;
					}
					if(ifRiddle5(key1_low, key2_low, key3_low, key4_low)){
						riddle5_f = 1;
						riddle3_f = 2;
					}
					printView();
				}
			}
			//lower dial key4
			if(mouseX > 390 && mouseX < 412) {
				if(mouseY > 290 && mouseY < 305) {
					var i;
					i = (key4_low_index+1) % 4;
					key4_low = keyArray4_low[i];
					key4_low_index++;
					if(ifRiddle5(key1_low, key2_low, key3_low, key4_low)){
						riddle5_f = 1;
						riddle3_f = 2;
					}
					printView();
				}
			}
			if(mouseX > 390 && mouseX < 412) {
				if(mouseY > 358 && mouseY < 377) {
					var i;
					if(key4_low_index > 0) {
						i = (key4_low_index-1) % 4;
						key4_low = keyArray4_low[i];
						key4_low_index--;
					}
					if(ifRiddle5(key1_low, key2_low, key3_low, key4_low)){
						riddle5_f = 1;
						riddle3_f = 2;
					}
					printView();
				}
			}

			//hum3のフラグを座標のクリックで変更
			if(mouseX > 265 && mouseX < 285) {
				if(mouseY > 235 && mouseY < 265) {
					console.log("You got a hum3.");
					hum3_f = 1;
					printView();
				}
			}
			//bossHumのフラグを座標のクリックで変更
			if(mouseX > 265 && mouseX < 295) {
				if(mouseY > 330 && mouseY < 370) {
					console.log("You got a boss hum.");
					bossHum_f = 1;
					printView();
				}
			}

		}else if (view == 41) {
			if(mouseX > 14 && mouseX < 35) {
				if(mouseY > 360 && mouseY < 390) {
					view = 4;
					console.log("view = 4"); //debug
					printView();
				}
			}
			if(mouseX > 40 && mouseX < 120) {
				if(mouseY > 130 && mouseY < 350) {
					blueBar_cnt += 1;
					console.log("blueBar_cnt:" + blueBar_cnt);
					if(ifRiddle1(blueBar_cnt, redBar_cnt, greenBar_cnt, yellowBar_cnt)) {
						riddle1_f = 1;
					}
					printView();
				}		
			}
			if(mouseX > 180 && mouseX < 250) {
				if(mouseY > 130 && mouseY < 350) {
					redBar_cnt += 1;
					console.log("redBar_cnt:" + redBar_cnt);
					if(ifRiddle1(blueBar_cnt, redBar_cnt, greenBar_cnt, yellowBar_cnt)) {
						riddle1_f = 1;
					}
					printView();
				}		
			}
			if(mouseX > 300 && mouseX < 380) {
				if(mouseY > 130 && mouseY < 350) {
					greenBar_cnt += 1;
					console.log("greenBar_cnt:" + greenBar_cnt);
					if(ifRiddle1(blueBar_cnt, redBar_cnt, greenBar_cnt, yellowBar_cnt)) {
						riddle1_f = 1;
					}
					printView();
				}		
			}
			if(mouseX > 430 && mouseX < 505) {
				if(mouseY > 130 && mouseY < 350) {
					yellowBar_cnt += 1;
					console.log("yellowBar_cnt:" + yellowBar_cnt);
					if(ifRiddle1(blueBar_cnt, redBar_cnt, greenBar_cnt, yellowBar_cnt)) {
						riddle1_f = 1;
					}
					printView();
				}		
			}
		}else if (view == 101) {
			if(mouseX > 14 && mouseX < 35) {
				if(mouseY > 360 && mouseY < 390) {
					view = 1;
					console.log("view = 1"); //debug
					printView();
				}
			}
		}else if(view == 102) {
			if(mouseX > 14 && mouseX < 35) {
				if(mouseY > 360 && mouseY < 390) {
					view = 1;
					console.log("view = " + view);
					printView();
				}
			}
		}

		//アイテムのクリック
		if(paper_f == 1) {
			if(mouseX > 201 && mouseX < 251) {
				if(mouseY > 1 && mouseY < 51) {
					console.log("This is a paper view."); //debug
					console.log("view = 101"); //debug
					view = 101;
					printView();
				}
			}
		}

		if(mouseX > 100 && mouseX < 180) {
			if(mouseY > 1 && mouseY < 32) {
				if(ifRiddle4()) {
					riddle4_f = 1;
					ham_f = 2; //フラグを0でも1にもしない
					star_f = 2; //フラグを0でも1にもしない
					printView();
				}
			}
		}

		if(mouseX > 152 && mouseX < 412) {
			if(mouseY > 1 && mouseY < 31) {
				if(hum1_f == 1 && hum2_f == 1 && hum3_f == 1 && hum4_f == 1) {
					cage_f = 1;
					alert("ハムスター達をカゴに返した!");
					hum1_f = 2; //フラグを0でも1にもしない
					hum2_f = 2; //フラグを0でも1にもしない
					hum3_f = 2; //フラグを0でも1にもしない
					hum4_f = 2; //フラグを0でも1にもしない
					hum5_f = 2; //フラグを0でも1にもしない
					printView();
				}
			}
		}

		if(messageWindow_f == 2) {
			if(mouseX > 100 && mouseX < 130) {
				if(mouseY > 1 && mouseY < 32) {
					view = 102;
					console.log("view = " + view);
					console.log("This is paper2 view.");
					printView();
				}
			}
		}

		if(bossHum_f == 1) {
			if(mouseX > 151 && mouseX < 185) {
				if(mouseY > 1 && mouseY < 32) {
					bossHum_f = 2; //フラグを0でも1にもしない
					cage_f = 2;
					door_f = 1;
					alert("ボスハムスターをカゴに返した!");
					printView();
				}
			}
		}
	}
	
	canvas.onmousemove = mouseMoveListner;
	function mouseMoveListner(e) {
		//表示クリア
		cx.clearRect(470, 0, 80, 35);
		//座標調整
		adjustXY(e);
		//テキストの描画
		cx.globalAlpha = 1;
		cx.fillStyle = "#666666";
		cx.font = "12px Arial";
		cx.fillText("X座標：" + mouseX, 475, 12);
		cx.fillText("Y座標：" + mouseY, 475, 24);
		
		clickHand(4, 25, 185, 215); //遷移ボタン左の座標
		clickHand(521, 546, 185, 215);　//遷移ボタン右の座標

	}

	//特定の座標において、マウスカーソルの形を矢印から手に変更
	function clickHand(x,x2,y,y2){
		if(mouseX > x && mouseX < x2 && mouseY > y && mouseY < y2){
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
	
	function printView(){
		var img = new Image();
		if(view == 1){
			//view1
			img.src = "../../static/images/view1.jpg";
			//door
			var door = new Image();
			door.src = "../../static/images/obj/door.png";
			//dor_open
			var door_open = new Image();
			door_open.src = "../../static/images/obj/door_open.png";
			//clock
			var clock = new Image();
			clock.src = "../../static/images/obj/clock.png";
			//cage
			var cage = new Image();
			cage.src = "../../static/images/obj/cage.png";
			//cage_middle
			var cage_middle = new Image();
			cage_middle.src = "../../static/images/obj/cage_middle.png";
			//cage_final
			var cage_final = new Image();
			cage_final.src = "../../static/images/obj/cage_final.png";
			//window
			var window = new Image();
			window.src = "../../static/images/obj/window.png";
			//hum4
			var hum4 = new Image();
			hum4.src = "../../static/images/obj/hum.png"; //20px:30px

			img.onload = function(){
				cx.drawImage(img, 0, 0);
				moveBt();
				itemBar();
			}
			door.onload = function() {
				if(door_f == 0) {
					cx.drawImage(door, 160, 195);
				}
				else if(door_f == 1) {
					cx.drawImage(door_open, 160, 195);
				}
			}
			clock.onload = function() {
				if(clock_f == 0) {
					cx.drawImage(clock, 70, 100);
				}
			}
			cage.onload = function() {
				if(cage_f == 0) {
					cx.drawImage(cage, 20, 330);
				}	
				else if(cage_f == 1) {
					cx.drawImage(cage_middle, 20, 330);
				}
				else if(cage_f == 2){
					cx.drawImage(cage_final, 20, 330);
				}
			}
			window.onload = function() {
				if(window_f == 0) {
					cx.drawImage(window, 330, 180);
				}
			}
			hum4.onload = function() {
				if(riddle4_f == 1 && hum4_f == 0) {
					cx.drawImage(hum4, 390, 370);
				}
			}

			//謎その5の開始フラグイベント
			if(messageWindow_f == 1) {
				alert("ハムスター達からボスの手がかりをもらった!");
				messageWindow_f = 2;
			}

		}else if(view == 2){
			//view2
			img.src = "../../static/images/view2.jpg";
			//mirror
			var mirror = new Image();
			mirror.src = "../../static/images/obj/mirror.png";
			//closet
			var closet = new Image();
			closet.src = "../../static/images/obj/closet.png";
			//chest
			var chest = new Image();
			chest.src = "../../static/images/obj/chest.png";

			img.onload = function(){
				cx.drawImage(img, 0, 0);
				moveBt();
				itemBar();
			}
			mirror.onload = function() {
				if(mirror_f == 0) {
					cx.drawImage(mirror, 225, 203);
				}
			}
			closet.onload = function() {
				if(closet_f == 0) {
					cx.drawImage(closet, 50, 225);
				}
			}
			chest.onload = function() {
				if(chest_f == 0) {
					cx.drawImage(chest, 360, 265);
				}
			}
		}else if(view == 3){
			//view3
			img.src = "../../static/images/view3.jpg";
			//aquarium
			var aquarium = new Image();
			aquarium.src = "../../static/images/obj/aquarium.png";
			//refrigerator
			var refrigerator = new Image();
			refrigerator.src = "../../static/images/obj/refrigerator.png";
			//refrigerator_open
			var refrigerator_open = new Image();
			refrigerator_open.src = "../../static/images/obj/refrigerator_open.png";
			//ham
			var ham = new Image();
			ham.src = "../../static/images/obj/ham.png";
			//hum2
			var hum2 = new Image();
			hum2.src = "../../static/images/obj/hum.png";
			/*
			//spade
			var spade = new Image();
			spade.src = "../../static/images/obj/spade.png";
			//heart
			var heart = new Image();
			heart.src = "../../static/images/obj/heart.png";
			//diamond
			var diamond = new Image();
			diamond.src = "../../static/images/obj/diamond.png";
			//club
			var club = new Image();
			club.src = "../../static/images/obj/club.png";
			*/

			img.onload = function(){
				cx.drawImage(img, 0, 0);
				moveBt();
				itemBar();
			}
			aquarium.onload = function() {
				if(aquarium_f == 0) {
					cx.drawImage(aquarium, 330, 150);
				}
			}
			refrigerator.onload = function() {
				if(refrigerator_f == 0) {
					cx.drawImage(refrigerator, 80, 200);
				}
				else if(refrigerator_f == 1) {
					cx.drawImage(refrigerator_open, 80, 200);
				}
			}
			ham.onload = function() {
				if(refrigerator_f == 1) {
					if(ham_f == 0) {
						cx.drawImage(ham, 130, 265);
					}
				}
			}
			hum2.onload = function(){
				if(riddle2_f == 1 && hum2_f == 0) {
					cx.drawImage(hum2, 390, 370);
				}
			}

			markView(mark1, 270);
			markView(mark2, 330);
			markView(mark3, 390);
			markView(mark4, 450);

		}else if(view == 4){
			//view4
			img.src = "../../static/images/view4.jpg";
			//switch
			var switch_board = new Image();
			switch_board.src = "../../static/images/obj/switch.png";
			//desk
			var desk = new Image();
			desk.src = "../../static/images/obj/desk.png";
			//chair1
			var chair1 = new Image();
			chair1.src = "../../static/images/obj/chair.png";
			//chair2
			var chair2 = new Image();
			chair2.src = "../../static/images/obj/chair.png";
			//calendar
			var calendar = new Image();
			calendar.src = "../../static/images/obj/calendar.png";
			//star
			var star = new Image();
			star.src = "../../static/images/obj/star.png";
			//paper
			var paper = new Image();
			paper.src = "../../static/images/obj/paper.png";
			//hum1
			var hum1 = new Image();
			hum1.src = "../../static/images/obj/hum.png"; //20px:30px

			img.onload = function(){
				cx.drawImage(img, 0, 0);
				moveBt();
				itemBar();
			}
			switch_board.onload = function() {
				if(switch_board_f == 0) {
					cx.drawImage(switch_board, 100, 250);
				}
			}
			desk.onload = function() {
				if(desk_f == 0) {
					cx.drawImage(desk, 260, 250);
				}
			}
			chair1.onload = function() {
				if(chair1_f == 0) {
					cx.drawImage(chair1, 280, 310);
				}
			}
			chair2.onload = function() {
				if(chair2_f == 0) {
					cx.drawImage(chair2, 370, 310);
				}
			}
			calendar.onload = function() {
				if(calendar_f == 0) {
					cx.drawImage(calendar, 350, 170);
				}
			}
			star.onload = function() {
				if(star_f == 0) {
					cx.drawImage(star, 430, 240);
				}
			}
			paper.onload = function() {
				if(paper_f == 0) {
					cx.drawImage(paper, 310, 260);
				}
			}
			hum1.onload = function() {
				if(riddle1_f == 1 && hum1_f == 0) {
					cx.drawImage(hum1, 490, 370);
				}
			}
		}else if(view == 11) {
			//view1
			img.src = "../../static/images/view1.jpg";
			//window_view
			var window_view = new Image();
			window_view.src = "../../static/images/window_view.png"; //510px:370px

			img.onload = function(){
				cx.drawImage(img, 0, 0);
				itemBar();
				backBt();
			}
			window_view.onload = function(){
				cx.drawImage(window_view, 20, 35);
			}

		}else if(view == 12) {
			//view1
			img.src = "../../static/images/view1.jpg";
			//cage_view_middle
			var cage_view_middle = new Image();
			cage_view_middle.src = "../../static/images/cage_view_middle.png"; //420px:250px
			//cage_view_final
			var cage_view_final = new Image();
			cage_view_final.src = "../../static/images/cage_view_final.png"; //420px:250px
			//messageWindow
			var messageWindow = new Image();
			messageWindow.src = "../../static/images/obj/messageWindow.png"; //450px:120px

			img.onload = function() {
				cx.drawImage(img, 0, 0);
				itemBar();
				backBt();
			}
			cage_view_middle.onload = function() {
				if(riddle5_f == 0) {
					cx.drawImage(cage_view_middle, 65, 120);
				}
				else if(bossHum_f = 2) {
					cx.drawImage(cage_view_final, 65, 120);
				}
			}
			messageWindow.onload = function() {
				if(messageWindow_f == 0) {
					cx.drawImage(messageWindow, 50, 100);
					message(message_cnt);
				}
			}



		}else if(view == 21) {
			//view2
			img.src = "../../static/images/view2.jpg";
			//chest_view_default
			var chest_view_default = new Image();
			chest_view_default.src = "../../static/images/chest_view_default.png"; //400px:370px
			//chest_view_middleOpen
			var chest_view_middleOpen = new Image();
			chest_view_middleOpen.src = "../../static/images/chest_view_middleOpen.png"; //490px:370px
			//chest_view_allOpen
			var chest_view_allOpen = new Image();
			chest_view_allOpen.src = "../../static/images/chest_view_allOpen.png"; //490px:370px
			//hum3
			var hum3 = new Image();
			hum3.src = "../../static/images/obj/hum.png"; //20px:30px
			//bossHum
			var bossHum = new Image();
			bossHum.src = "../../static/images/obj/bossHum.png"; //30px:40px

			img.onload = function(){
				cx.drawImage(img, 0, 0);
				itemBar();
				backBt();
			}
			chest_view_default.onload = function(){
				if(riddle3_f == 0) {
					cx.drawImage(chest_view_default, 75, 35);
					dialKey_middle();
				}
				else if(riddle3_f == 1) {
					cx.drawImage(chest_view_middleOpen, 30, 35);
					dialKey_lower();
				}
				else if(riddle5_f == 1) {
					cx.drawImage(chest_view_allOpen, 30, 35);
				}
			}
			hum3.onload = function() {
				if(riddle3_f == 1 && hum3_f == 0) {
					cx.drawImage(hum3, 265, 235);
				}
			}
			bossHum.onload = function() {
				if(riddle5_f == 1 && bossHum_f == 0) {
					cx.drawImage(bossHum, 265, 330);
				}
			}
			
		}else if(view == 41) {
			//view4
			img.src = "../../static/images/view4.jpg"; 
			//switch_view
			var switch_view = new Image();
			switch_view.src = "../../static/images/switch_view.png"; //500px:300px
			


			img.onload = function(){
				cx.drawImage(img, 0, 0);
				itemBar();
				backBt();
			}
			switch_view.onload = function(){
				cx.drawImage(switch_view, 25, 65);
			}

			barView(blueBar_cnt, 30);
			barView(redBar_cnt, 170);
			barView(greenBar_cnt, 295);
			barView(yellowBar_cnt, 420);

			
		}else if(view == 101) {
			//view101
			img.src = "../../static/images/view1.jpg"; 
			//paper_view
			var paper_view = new Image();
			paper_view.src = "../../static/images/paper_view.png"; //500px:270px

			img.onload = function(){
				cx.drawImage(img, 0, 0);
				itemBar();
				backBt();
			}
			paper_view.onload = function(){
				cx.drawImage(paper_view, 25, 80);
			}

		}else if(view == 102) {
			//view102
			img.src = "../../static/images/view1.jpg";
			//paper2_view
			var paper2_view = new Image();
			paper2_view.src = "../../static/images/paper2_view.png"; //500px:270px

			img.onload = function(){
				cx.drawImage(img, 0, 0);
				itemBar();
				backBt();
			}
			paper2_view.onload = function(){
				cx.drawImage(paper2_view, 25, 80);
			}
		}
	}

	//スイッチの謎解きの判断
	function ifRiddle1(c1, c2, c3, c4) {
		if(c1 % 4 == 3) {
			if(c2 % 4 == 0) {
				if(c3 % 4 == 2) {
					if (c4 % 4 == 1) {
						alert("謎その1クリア!");
						return true;
					}
				}
			}
		}
	}

	//トランプの謎解きの判断
	function ifRiddle2(m1, m2, m3, m4) {
		if(m1 % 4 == 1) {
			if(m2 % 4 == 2) {
				if(m3 % 4 == 3) {
					if(m4 % 4 == 0) {
						alert("謎その2クリア!");
						return true;
					}
				}
			}
		}
	}

	//タンスの謎解きの判断
	function ifRiddle3(k1, k2, k3) {
		if(k1 == "b" && k2 == "i" && k3 == "g") {
			alert("謎その3クリア!");
			return true;
		} 
	}

	//ハムとスターの謎解きの判断
	function ifRiddle4() {
		if(ham_f == 1 && star_f == 1) {
			alert("謎その4クリア!");
			return true;
		}
	}

	//ボスハムスターの謎解きの判断
	function ifRiddle5(k1, k2, k3, k4) {
		if(k1 == "い" && k2 == "き" && k3 == "ぬ" && k4 == "き") {
			alert("すべての謎クリア!");
			return true;
		} 
	}

	//トランプの描画
	function markView(m, x) {
		//spade
		var spade = new Image();
		spade.src = "../../static/images/obj/spade.png";
		//heart
		var heart = new Image();
		heart.src = "../../static/images/obj/heart.png";
		//diamond
		var diamond = new Image();
		diamond.src = "../../static/images/obj/diamond.png";
		//club
		var club = new Image();
		club.src = "../../static/images/obj/club.png";

		if(m % 4 == 1) {
			spade.onload = function(){
				cx.drawImage(spade, x, 250);
			}
		}
		else if(m % 4 == 2) {
			heart.onload = function(){
				cx.drawImage(heart, x, 250)
			}
		}
		else if(m % 4 == 3) {
			diamond.onload = function(){
				cx.drawImage(diamond, x, 250)
			}
		}
		else if(m % 4 == 0) {
			club.onload = function(){
				cx.drawImage(club, x, 250)
			}
		}
	}

	//スイッチバーの描画
	function barView(cnt, x) {
		//bar
		var bar = new Image();
		bar.src = "../../static/images/obj/bar.png";

		if(cnt % 4 == 1) {
			bar.onload = function(){
				cx.drawImage(bar, x, 290);		
			}
		}
		else if(cnt % 4 == 2) {
			bar.onload = function(){
				cx.drawImage(bar, x, 240);
			}
		}
		else if(cnt % 4 == 3) {
			bar.onload = function(){
				cx.drawImage(bar, x, 190);
			}
		}
		else if(cnt % 4 == 0) {
			bar.onload = function(){
				cx.drawImage(bar, x, 140);
			}
		}
	}

	//チェスト中段のダイヤルの描画
	function dialKey_middle() {
		//ダイヤルボックスの描画
		cx.fillStyle = "#ffffff";
		cx.beginPath();
		cx.fillRect(157, 209, 45, 45);
		cx.fill();
		cx.beginPath();
		cx.fillRect(240, 209, 45, 45);
		cx.fill();
		cx.beginPath();
		cx.fillRect(323, 209, 45, 45);
		cx.fill();

		//文字の描画
		cx.fillStyle = "#444444";
		cx.font = "40px 'ＭＳ ゴシック'";
		cx.beginPath();
		cx.fillText(key1, 165, 245);
		cx.beginPath();
		cx.fillText(key2, 245, 245);
		cx.beginPath();
		cx.fillText(key3, 330, 245);
	}

	//チェスト下段のダイヤルの描画
	function dialKey_lower() {
		//ダイヤルボックスの描画
		cx.fillStyle = "#ffffff";
		cx.beginPath();
		cx.fillRect(120, 310, 47, 45);
		cx.fill();
		cx.beginPath();
		cx.fillRect(200, 310, 47, 45);
		cx.fill();
		cx.beginPath();
		cx.fillRect(290, 310, 47, 45);
		cx.fill();
		cx.beginPath();
		cx.fillRect(377, 310, 47, 45);
		cx.fill();

		//文字の描画
		cx.fillStyle = "#444444";
		cx.font = "40px 'ＭＳ ゴシック'";
		cx.beginPath();
		cx.fillText(key1_low, 125, 350);
		cx.beginPath();
		cx.fillText(key2_low, 205, 350);
		cx.beginPath();
		cx.fillText(key3_low, 295, 350);
		cx.beginPath();
		cx.fillText(key4_low, 380, 350);
	}


	//メッセージウインドウの描画
	function message(i) {
		var messageList = [
			"ぼくたちを見つけてくれてありがとう!",
			"でも、ぼくたちのボスがまだだよ!",
			"ボスもこのカゴに戻してあげてよ!"
		];
		var s = messageList[i];
		//文字の描画
		cx.fillStyle = "#444444";
		cx.font = "20px 'ＭＳ ゴシック'";
		cx.beginPath();
		cx.fillText(s, 100, 140);
	}



	function moveBt(){
		cx.beginPath();
		cx.moveTo(4, 200);
		cx.lineTo(25, 185);
		cx.lineTo(25, 215);
		cx.closePath();
		/* 三角形を塗りつぶす */
		cx.fillStyle = "#ffff00";
		cx.fill();
		cx.beginPath();
		cx.moveTo(546, 200);
		cx.lineTo(521, 185);
		cx.lineTo(521, 215);
		cx.closePath();
		/* 三角形を塗りつぶす */
		cx.fillStyle = "#ffff00";
		cx.fill();
	}

	function backBt() {
		cx.beginPath();
		cx.moveTo(14, 375);
		cx.lineTo(35, 360);
		cx.lineTo(35, 390);
		cx.closePath();
		/* 三角形を塗りつぶす */
		cx.fillStyle = "#ffff00";
		cx.fill();
	}

	function itemBar(){
		var item = "ITEM";
		cx.fillStyle = 'rgba(0, 0, 0, 0.5)';
		cx.fillRect(0,0,550,35);
		cx.beginPath();
		cx.strokeStyle = "#ffffff";
		cx.stroke();
		cx.fillStyle = "#ffffff";
		cx.font = "30px 'ＭＳ ゴシック'";
		cx.fillText(item,5,28);
		cx.beginPath();
		cx.strokeRect(100,1,32,32);
		cx.stroke();
		cx.beginPath();
		cx.strokeRect(152,1,32,32);
		cx.stroke();
		cx.beginPath();
		cx.strokeRect(204,1,32,32);
		cx.stroke();
		cx.beginPath();
		cx.strokeRect(256,1,32,32);
		cx.stroke();
		cx.beginPath();
		cx.strokeRect(308,1,32,32);
		cx.stroke();
		cx.beginPath();
		cx.strokeRect(360,1,32,32);
		cx.stroke();
		cx.beginPath();
		cx.strokeRect(412,1,32,32);
		cx.stroke();
		
		//itembarにitemを追加
		if(ham_f == 1) {
			var itemHam = new Image();
			itemHam.src = "../../static/images/obj/ham.png";
			itemHam.onload = function() {
				cx.drawImage(itemHam, 152, 1);
			}
		}
		if(star_f == 1) {
			var itemStar = new Image();
			itemStar.src = "../../static/images/obj/star.png";
			itemStar.onload = function() {
				cx.drawImage(itemStar, 100, 1);
			}
		}
		if(paper_f == 1) {
			var itemPaper = new Image();
			itemPaper.src = "../../static/images/obj/itemPaper.png";
			itemPaper.onload = function() {
				cx.drawImage(itemPaper, 204, 1);
			}
		}
		if(hum1_f == 1) {
			var itemHum1 = new Image();
			itemHum1.src = "../../static/images/obj/hum.png";
			itemHum1.onload = function() {
				cx.drawImage(itemHum1, 256, 1);
			}
		}
		if(hum2_f == 1) {
			var itemHum2 = new Image();
			itemHum2.src = "../../static/images/obj/hum.png";
			itemHum2.onload = function() {
				cx.drawImage(itemHum2, 308, 1);
			}
		}
		if(hum3_f == 1) {
			var itemHum3 = new Image();
			itemHum3.src = "../../static/images/obj/hum.png";
			itemHum3.onload = function() {
				cx.drawImage(itemHum3, 360, 1);
			}
		}
		if(hum4_f == 1) {
			var itemHum4 = new Image();
			itemHum4.src = "../../static/images/obj/hum.png";
			itemHum4.onload = function() {
				cx.drawImage(itemHum4, 412, 1);
			}
		}
		if(messageWindow_f == 2) {
			var itemPaper2 = new Image();
			itemPaper2.src = "../../static/images/obj/itemPaper.png";
			itemPaper2.onload = function() {
				cx.drawImage(itemPaper2, 100, 1);
			}

		}
		if(bossHum_f == 1) {
			var itemBossHum = new Image();
			itemBossHum.src = "../../static/images/obj/bossHum.png";
			itemBossHum.onload = function() {
				cx.drawImage(itemBossHum, 152, 1);
			}
		}
	}
};