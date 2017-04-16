
var ballT, ballL;
var launched = false;
var turnNum = 0;
var p1Score = 0;
var p2Score = 0;
var w = $('#ball').width();
var h;
var pagecenterW = w/24;
var pagecenterH;
$(document).ready(function(){
	$('#ball').height(w);
	h = $('#ball').height();
	pagecenterH = h/2;
 	$("#ball").css("maring-top", -pagecenterH);
	$("#ball").css("maring-left", -pagecenterW);
	$("#p1").html(p1Score);
	$("#p2").html(p2Score);
});


function launchBall(){
	var  turn = getTurnNumber();
	if(!launched){
		if(turn % 2 == 0){
			
		}
		else{
			
		}
	}
}

function setTurnNumber(num){
	turnNum = num;
}

function getTurnNumber(){
	return turnNum;
}

function change(time, color){
	var newColor = color;
	if(time % 2 == 0){
		$(".flash").css("border-color", "white");
		$("#scoreTitle").css("background", "white");
		$("#centerLine").css("background", "white");
		$(".flash").css("box-shadow", " 3px 3px 5px " +color+", -3px 3px 5px "+color+", -3px -3px 5px "+color+", 3px -3px 5px "+color);
		
			
	}
	else{
		$(".flash").css("border-color", color);
		$("#scoreTitle").css("background", color);
		$("#centerLine").css("background", color);
		$(".flash").css("box-shadow", " 5px 5px 5px white, -5px 5px 5px white, -5px -5px 5px white, 5px -5px 5px white");
	}
}


//resets game for next turn
function reset() {
	$(".flash").css("border-color", "white");
	$("#scoreTitle").css("background", "white");
	$("#centerLine").css("background", "white");
	$(".flash").css("box-shadow", " 0 0 0 transparent");
	$("#leftPaddle").css("top", "41.25%");
	$("#rightPaddle").css("top", "41.25%");
	$("#ball").css("top", "50%");
	$("#ball").css("left", "48.6%");
	$("#ball").css("maring-top", -pagecenterH);
	$("#ball").css("maring-left", -pagecenterW);
	$("#p1").html(p1Score);
	$("#p2").html(p2Score);
	launched = false;
	turnNum++;
	
}

function flash(color) {
	var time = 0;
	var timer = setInterval(function() {
		change(time, color);
		time++;
		if(time == 50){
		    clearInterval(timer);
		    reset();
		}
	} , 150);	
}

// keydown handler
var interval;
var called = false;
$(document).on('keydown', function(e) {	
    if(interval == null) {
        called = false;
        interval = setInterval(function() {
            movePaddles(e.keyCode);
            called = true;
        }, 10);
    }

}).on('keyup', function(e) {
    clearInterval(interval); 
    interval = null;
    if(!called)
        doSomething(e.keyCode);
});

function movePaddles(keyCode) {
     var p1 = $("#leftPaddle").position().top;
     var p2 = $("#rightPaddle").position().top;
     var topLim = 0;
     var bottomLim = $("#field").position().bottom;
     switch(keyCode){
		case 87: //p1 up (w)
 		     	if((p1-3) > topLim)  {  $("#leftPaddle").css("top" ,p1-3);  }
 		     	else  {  $("#leftPaddle").css("top",(topLim));  }
			break;

		case 83: // p1 down (s)
		     	if((p1+3) < bottomLim)  {  $("#leftPaddle").css("top" , p1+3);  }
 		     	else  {  $("#leftPaddle").css("top", bottomLim);  }
			break;

		case 38: //p2 up (upArrow)
			if((p2-3) > topLim)  {  $("#rightPaddle").css("top" ,p2-3);  }
 		     	else  {  $("#rightPaddle").css("top",(topLim));  }
			break;

		case 40: // p2 down (downArrow)
			if((p2+3) < bottomLim)  {  $("#rightPaddle").css("top" , p2+3);  }
 		     	else  {  $("#rightPaddle").css("top", bottomLim);  }
			break;
		     
	     	case 13: // launch ball at start
		     launchBall();

	}
}
