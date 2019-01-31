// Isaac Jon
// SoftDev2 pd7
// K00 - I See a Red Door
// 2019-01-31

const c = document.getElementById("slate");
const ctx = c.getContext("2d");
var drawState = false //false is box, true is dot


var toggleState = function(e) {
    if(drawState == false) {
      drawState = true;
      console.log(drawState)
    }
    else {
      drawState = false;
      console.log(drawState)
    };
    if (drawState == false) {
      msg.innerHTML = "Current State: BOX"
    }
    else {
      msg.innerHTML = "Current State: DOT"
    }
};

var getMousePos = function(evt) { //Same result as evt.offsetX and evt.offsetY
    var rect = c.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

var drawShape = function(evt) {
  pos = getMousePos(evt)
  if (drawState == false) {
    ctx.fillStyle = '#0000ff';
    ctx.fillRect(pos.x, pos.y, 20, 20);
  }
  if (drawState == true) {
    ctx.beginPath();
    ctx.ellipse(pos.x, pos.y, 12, 12, Math.PI / 4, 0, 2 * Math.PI);
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
