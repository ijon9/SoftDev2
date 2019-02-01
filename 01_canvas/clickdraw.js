// OnePlusOneIsThree -- Soojin Choi, Tabassum Fabiha, Isaac Jon
// SoftDev2 pd7
// K01 - ...and I want to Paint It Better
// 2019-01-31

const c = document.getElementById("slate");
const ctx = c.getContext("2d");
var drawState = "BOX" //"BOX" is box, "DOT" is dot

//e.preventDefault()
//ctx.beginPath() is used before starting a new path, and can be used to draw lines, ellipses, arcs, or rectangles
//e.offsetX is used to return the x coordinate of mouse cursor in relation to the div in which your cursor is in
//e.offsetY same as above, but returns y coordinate instead


var toggleState = function(e) { //Toggles between placing dot or a box
    if(drawState == "BOX") {
      drawState = "DOT";
      console.log(drawState)
    }
    else {
      drawState = "BOX";
      console.log(drawState)
    };
    if (drawState == "BOX") {
      msg.innerHTML = "Current State: BOX"
    }
    else {
      msg.innerHTML = "Current State: DOT"
    }
};

var getMousePos = function(evt) { //Same as using evt.offsetX and evt.offsetY
    var rect = c.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

var drawShape = function(evt) { //Draws the shape based on
  pos = getMousePos(evt)
  if (drawState == "BOX") {
    ctx.fillStyle = '#0000ff';
    //ctx.fillRect(pos.x, pos.y, 20, 20);
    ctx.fillRect(evt.offsetX, evt.offsetY, 20, 20)
  }
  if (drawState == "DOT") {
    ctx.beginPath();
    //ctx.ellipse(pos.x, pos.y, 12, 12, Math.PI / 4, 0, 2 * Math.PI);
    ctx.ellipse(evt.offsetX, evt.offsetY, 12, 12, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = '#0000ff';
    ctx.fill()
  }
}

var clear = function(e) {
  ctx.clearRect(0, 0, c.width, c.height);
}

var t = document.getElementById("toggle");
t.addEventListener('click', toggleState)


var cls = document.getElementById("clear");
cls.addEventListener('click', clear);
