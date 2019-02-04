// smallChungus:  Robin Han & Isaac Jon
// SoftDev2 PD7
// K#01 -- ...and I want to Paint It Btter
// 2019-01-31

//initially allows user to draw rectangles when mouse is pressed on canvas.
var c = document.getElementById("playground");
var ctx = document.getContext("2d")

var goButton = document.getElementById("circle");
//event listener for stopping animation
var stopButton = document.getElementById("stop");

goButton.addEventListener("click", animate);
stopButton.addEventListener("click", stop);

var requestID;
var radius = 0;
var growing = false;

var clear = function(e) {
	ctx.clearRect(0,0,canvas.width,canvas.height);
};

var drawDot = function() {
	clear()
	if(radius == 0) {
		growing = true;
		radius++
	}
	if (radius >= 250) {
		growing = false;
	}
	//draw the dot
	ctx.beginPath();
	ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
	ctx.stroke();
	ctx.fill();
	...
}

var stopIt = function() {
	console.log(requestID);
	...
};
