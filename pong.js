
$(document).ready(function(){
	var w = $('#ball').width();
	$('#ball').height(w);
	var h = $('#ball').height();
	var pagecenterW = w/2;
	var pagecenterH = h/2;
 	$("#ball").css({margin-top: -pagecenterH, margin-left: -pagecenterW});
});


var ball = {

}

// keydown handler
$(document).keydown(function(e){

	switch(e.keyCode){

		case 87: //p1 up (w)
			$("#leftPaddle").top($("#leftPaddle").top()-1)
			$("#leftPaddle").bottom($("#leftPaddle").bottom()+1)

			break;

		case 83: // p1 down (s)

			$("#leftPaddle").bottom($("#leftPaddle").bottom()-1)
			$("#leftPaddle").top($("#leftPaddle").top()+1)

			break;

		case 38: //p2 up (upArrow)
			$("#rightPaddle").bottom($("#rightPaddle").bottom()+1)
			$("#rightPaddle").top($("#rightPaddle").top()-1)

			break;

		case 40: // p2 down (downArrow)
			$("#rightPaddle").bottom($("#rightPaddle").bottom()-1)
			$("#rightPaddle").top($("#rightPaddle").top()+1)
			break;

	}
});
