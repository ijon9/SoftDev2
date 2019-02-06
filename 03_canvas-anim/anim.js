//Team MS Paint: Isaac Jon Imad Belkebir
//SoftDev pd7
//K #03: They lock us in the tower whenever we get caught
//2/4/19

var canvas = document.getElementById('playground');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var ctx = canvas.getContext('2d');
var animating = false;
var growing = true;
var radius = 0;
var id;

start.addEventListener('click', function() {
  if(!animating){
    animating = true;
    window.requestAnimationFrame(paint);
  }
});
stop.addEventListener('click', function() {
  animating = false;
  window.cancelAnimationFrame(id);
});

function paint() {
  //console.log(radius);
  if(animating){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(radius > 0){
    	ctx.beginPath();
    	ctx.fillStyle = "#18f0f0";
    	ctx.ellipse(300, 300, radius, radius, 0, 0, 2 * Math.PI);
    	ctx.fill()
    	ctx.stroke();
    }
      if(radius == 0){
        radius++;
        growing = true;
      }
      if(radius >= 300){
        growing = false;
      }
      if(radius <= 0){
        growing = true;
      }
      if(growing){
        radius += 5;
      }else{
        radius -= 5;
      }
      window.requestAnimationFrame(paint);
    }else{
      window.cancelAnimationFrame(id);
    }
};
