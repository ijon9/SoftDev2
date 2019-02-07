//Team MS Paint: Isaac Jon Imad Belkebir
//SoftDev pd7
//K #03: They lock us in the tower whenever we get caught
//2/4/19

var canvas = document.getElementById('playground');
var start = document.getElementById('start');
var start2 = document.getElementById('start2');
var stop = document.getElementById('stop');
var ctx = canvas.getContext('2d');
var animating = false;
var moving = false;
var growing = true;
var radius = 0;
var velX;
var velY;
var curX;
var curY;
var id;

start.addEventListener('click', function() {
    moving = false;
    if(!animating){
	animating = true;
	window.requestAnimationFrame(paint);
    }
});

start2.addEventListener('click', function() {
    animating = false;
    curX = null;
	curY = null;
    if(!moving){
	moving = true;
	window.requestAnimationFrame(paint2);
    }
});

stop.addEventListener('click', function() {
    animating = false;
    moving = false;
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
	id = window.requestAnimationFrame(paint);
    }else{
	window.cancelAnimationFrame(id);
    }
}

function paint2() {
    if(moving){
	if(curX == null){
	    curX = Math.floor(Math.random() * (canvas.width-100));
	    curY = Math.floor(Math.random() * (canvas.height-100));
	    velX = 3;
	    velY = 3;
	    moving = true;
	}
	ctx.clearRect(0,0,canvas.width,canvas.height);
	if(curX >= 500 || curX <= 0){
	    velX *= -1;
	}
	if(curY >= 500 || curY <= 0){
	    velY *= -1;
	}
	curX += velX;
	curY += velY;
	console.log(curX);

	if(curX >= 0 && curY >= 0){
	    ctx.beginPath();
	    var image = new Image();
	    image.src = 'logo_dvd.jpg';
	    ctx.drawImage(image, curX, curY, 100, 100);
	}
	id = window.requestAnimationFrame(paint2);
    }else{
	window.cancelAnimationFrame(id);
    }
}
