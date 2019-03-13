//Isaac Jon
//SoftDev2 Pd7
//K09 -- Connect the Dots
//2019-03-13

const svgURL = "http://www.w3.org/2000/svg"

var has_drawing = false;
var last_xcor = null;
var last_ycor = null;


var pic = document.getElementById("vimage");
var butClear = document.getElementById("but_clear");

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

// This code draws a red circle in the middle of the screen
function drawCircle(e) {
  has_drawing = true;
  var c = document.createElementNS(svgURL, "circle");
  var rect = pic.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 10);
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  pic.appendChild(c);
  if (last_xcor == null){
    last_xcor = x;
    last_ycor = y;
  }
  else{
    connectDot(x,y);
  }
}
// =============================

// Connects dots
function connectDot(xcor,ycor){
  var l = document.createElementNS(svgURL, "line")
  l.setAttribute("x1", last_xcor);
  l.setAttribute("y1", last_ycor);
  l.setAttribute("x2", xcor);
  l.setAttribute("y2", ycor);
  l.setAttribute("stroke", "black")
  pic.appendChild(l);
	last_xcor = xcor;
	last_ycor = ycor;
}
// =============================

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
// =============================
