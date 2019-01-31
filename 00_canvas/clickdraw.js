const c = document.getElementById("slate");
const ctx = c.getContext("2d");

var drawRect = function(e) {
  ctx.fillStyle = '#0000ff';
  ctx.fillRect(50, 50, 150, 100);
};

var drawDot = function(e) {
  ctx.beginPath();
  ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
  ctx.stroke();
}

var clear = function(e) {
  ctx.clearRect(0, 0, c.width, c.height);
}

var button = document.getElementById("rect");
button.addEventListener('click', drawRect);

var button = document.getElementById("clear");
button.addEventListener('click', clear);

var button = document.getElementById("dot");
button.addEventListener('click', drawDot);
