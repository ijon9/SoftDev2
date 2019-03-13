//Isaac Jon
//SoftDev2 Pd7
//K09 -- Connect the Dots
//2019-03-13

const svgURL = "http://www.w3.org/2000/svg"

var has_drawing = false;

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
	var rect = pic.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
	//If click location is on a circle. If the color of the circle is green, delete it and make one at a random location
	
	//Otherwise, make a circle at that spot
  var c = document.createElementNS(svgURL, "circle");
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 20);
  c.setAttribute("fill", "blue");
  c.setAttribute("stroke", "black");
	c.style.pointerEvents = "none";
  pic.appendChild(c);
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

console.log(pic.children)
