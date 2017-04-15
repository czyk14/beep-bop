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

var goalColor;
function setGoalColor(color){
	goalColor=color;
}

function getGoalColor(){
	return goalColor;
}

function change(time){
	//var color = getGoalColor();
	if(time % 2 == 0){
		$(".flash").css("border-color", "white");
		$("#scoreTitle").css("background", "white");
		$("#centerLine").css("background", "white");
		$(".flash").css("box-shadow", " 3px 3px 5px red, -3px 3px 5px red, -3px -3px 5px red, 3px -3px 5px red");
		
			
	}
	else{
		$(".flash").css("border-color", "red");
		$("#scoreTitle").css("background", "red");
		$("#centerLine").css("background", "red");
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
	$("#p1").html(p1Score);
	$("#p2").html(p2Score);
	launched = false;
	turnNum++;
	
}

function flash() {
	var time = 0;
	var timer = setInterval(function() {
		change(time);
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
            doSomething(e.keyCode);
            called = true;
        }, 10);
    }

}).on('keyup', function(e) {
    clearInterval(interval); 
    interval = null;
    if(!called)
        doSomething(e.keyCode);
});

function doSomething(keyCode) {
     var p1 = $("#leftPaddle").position().top;
     var p2 = $("#rightPaddle").position().top;
     switch(keyCode){
		case 87: //p1 up (w)		
			$("#leftPaddle").css("top",(p1-3));
			break;

		case 83: // p1 down (s)
			$("#leftPaddle").css("top",(p1+3));
			break;

		case 38: //p2 up (upArrow)
			$("#rightPaddle").css("top", (p2-3));
			break;

		case 40: // p2 down (downArrow)
			$("#rightPaddle").css("top", (p2+3));
			break;
		     
	     	case 13: // launch ball at start
		     launchBall();

	}
}
