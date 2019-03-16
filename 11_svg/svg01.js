// Isaac Jon
// SoftDev2 pd7
// K10 -- Ask Circles [Change || Die]
// 2019-03-14

const svgURL = "http://www.w3.org/2000/svg"

//States
//===========================
var has_drawing = false;
var moving = false;
//===========================

//Buttons
//===========================
var pic = document.getElementById("vimage");
var butClear = document.getElementById("but_clear");
var ctag = document.getElementsByTagName("circle")
var butMove = document.getElementById("but_move");
//===========================

//Event Listeners
//===========================
pic.addEventListener("mousedown", drawCircle)

butClear.addEventListener("click", function(e){
	if (has_drawing){
		//clears the canvas when user writes on it
		clear();
	}
	else{
		//prevents the click to occur when user hasn't written anything on the canvas yet
		error.innerHTML = "There is no drawing to clear!";
		e.preventDefault();
	}
});

butMove.addEventListener("click", function() {
	if(!moving) {
		moving = true;
		move()
	}
});
//===========================

//Sets circles into motion
function move(e) {
	//Goes through each circle
	for(i=0; i<pic.children.length; i++) {
		pic.children[i].setAttribute("state", "moving");
		step(pic.children[i])
	}
	window.requestAnimationFrame(move)
}

//Step function for circles
function step(circ) {
	xVel = parseFloat(circ.getAttribute("vx"))
	yVel = parseFloat(circ.getAttribute("vy"))
	xPos = parseFloat(circ.getAttribute("cx"))
	yPos = parseFloat(circ.getAttribute("cy"))
	if(xPos + xVel > 500 || xPos + xVel < 0) {
		xVel *= -1
		circ.setAttribute("vx", xVel)
	}
	if(yPos + yVel > 500 || yPos + yVel < 0) {
		yVel *= -1
		circ.setAttribute("vy", yVel)
	}
	circ.setAttribute("cx", xPos + xVel)
	circ.setAttribute("cy", yPos + yVel)
	// console.log("x location: " + circ.getAttribute("cx"))
}

//Makes Circle bigger
function alter(e) {
  if(this.getAttribute("fill") == "blue") {
    this.setAttribute("fill", "green")
  }
  else {
    pic.removeChild(this)
    placeCircle(Math.random()*500, Math.random()*500)
  }
}

// This code draws a red circle in the middle of the screen
function drawCircle(e) {
  has_drawing = true;
	var rect = pic.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
	var circle = circleAt(x,y)
	// If there is a circle at the point, ask if it is green. If it is green, delete it and add a random circle. if it is blue, turn it green.
  if (!circleAt(x,y)) {
    placeCircle(x, y)
  }
}

//Adds circle at location
function placeCircle(x, y) {
	var c = document.createElementNS(svgURL, "circle");
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
	c.setAttribute("r", 20);
	c.setAttribute("vx", 2)
	c.setAttribute("vy", 2)
  c.setAttribute("fill", "blue");
  c.setAttribute("stroke", "black");
	c.setAttribute("clickCounter", 0);
  c.addEventListener("click", alter)
  pic.appendChild(c);
}

function circleAt(x, y) {
	for(i=pic.children.length-1; i >= 0; i--) {
		circ = pic.children[i]
		circX = circ.getAttribute("cx")
		circY = circ.getAttribute("cy")
		circR = circ.getAttribute("r")
		if (Math.hypot(circX - x, circY - y) < circR) {
			return true
		}
	}
	return false
}

function isGreen(circle) {
	cColor = circle.getAttribute("fill")
	return cColor == "green";
}

// Clears svg
function clear(e) {
  children = pic.children
  while(children.length > 0) {
    pic.removeChild(children[0]);
  }
  has_drawing = false;
  last_xcor = null;
  last_ycor = null;
}
