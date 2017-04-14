
$(document).ready(function(){
	var w = $('#ball').width();
	$('#ball').height(w);
	var h = $('#ball').height();
	var pagecenterW = w/24;
	var pagecenterH = h/2;
 	$("#ball").css("margin-top", -pagecenterH);
 	$("#ball").css("margin-left", -pagecenterW);
});


var ball = {

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

function resetColors() {
	$(".flash").css("border-color", "white");
	$("#scoreTitle").css("background", "white");
	$("#centerLine").css("background", "white");
	$(".flash").css("box-shadow", " 0 0 0 transparent");
}

function flash() {
	var time = 0;
	while(time < 100){
		setTimeout(change(time), 1000)	
		time++;
	}
	resetColors();
}

// keydown handler
$(document).keydown(function(e){
	alert("Keydown!");
	switch(e.keyCode){

		case 87: //p1 up (w)
			var t = $("#leftPaddle").top();
			var b = $("#leftPaddle").bottom();
			$("#leftPaddle").top(t-1);
			$("#leftPaddle").bottom(b+1);

			break;

		case 83: // p1 down (s)
			var t = $("#leftPaddle").top();
			var b = $("#leftPaddle").bottom();
			$("#leftPaddle").top(t+1);
			$("#leftPaddle").bottom(b-1);

			break;

		case 38: //p2 up (upArrow)
			var t = $("#rightPaddle").top();
			var b = $("#rightPaddle").bottom();
			$("#rightPaddle").top(t-1);
			$("#rightPaddle").bottom(b+1);
			break;

		case 40: // p2 down (downArrow)
			var t = $("#rightPaddle").top();
			var b = $("#rightPaddle").bottom();
			$("#rightPaddle").top(t+1);
			$("#rightPaddle").bottom(b-1);
			break;

	}
});
