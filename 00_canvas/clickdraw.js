var button = document.getElementById("b");
button.addEventListener('click', drawRect);

var drawRect = function(e) {
  var canvas = document.getElementById("slate");
  var ctx = c.getContext("2d");
  ctx.fillStyle = '#0000ff';
  ctx.fillRect(10, 10, 150, 100);
}
