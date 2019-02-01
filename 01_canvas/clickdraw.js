// OnePlusOneIsThree -- Soojin Choi, Tabassum Fabiha, Isaac Jon
// SoftDev2 pd7
// K01 - ...and I want to Paint It Better
// 2019-01-31

const c = document.getElementById("slate");
const ctx = c.getContext("2d");

var drawState = "BOX" //"BOX" is box, "DOT" is dot

var toggleState = function(e) { //Toggles between placing dot or a box

    if(drawState == "BOX")
    {
	drawState = "DOT";
	console.log(drawState);
	msg.innerHTML = "Current State: DOT";
    }
    else
    {
	drawState = "BOX";
	console.log(drawState);
	msg.innerHTML = "Current State: BOX";
    };

};

var getMousePos = function(evt) { //Same as using evt.offsetX and evt.offsetY

    // e.offsetX is used to return the x coordinate of mouse cursor
    // in relation to the div in which your cursor is in

    //e.offsetY same as above, but returns y coordinate instead

    return {
	x: evt.offsetX,
	y: evt.offsetY
    };
}

var drawShape = function(evt) { //Draws the shape based on

    if (drawState == "BOX")
    {
	ctx.fillStyle = '#0000ff'; // change color of fill
	//ctx.fillRect(pos.x, pos.y, 20, 20);
	ctx.fillRect(evt.offsetX, evt.offsetY, 20, 20) // display rectangle
    }

    if (drawState == "DOT")
    {
	// ctx.beginPath() is used before starting a new path,
	// it can be used to draw lines, ellipses, arcs, or rectangles
	ctx.beginPath();

	// create a dot on ctx
	//ctx.ellipse(pos.x, pos.y, 12, 12, Math.PI / 4, 0, 2 * Math.PI);
	ctx.ellipse(evt.offsetX, evt.offsetY, 12, 12, Math.PI / 4, 0, 2 * Math.PI);

	//ctx.stroke();

	ctx.fillStyle = '#0000ff'; // change color of fill
	ctx.fill() // display shape on page
    }
}

var clear = function(e) { // clears the canvas

    ctx.clearRect(0, 0, c.width, c.height);
}

var t = document.getElementById("toggle");
t.addEventListener('click', toggleState)

var cls = document.getElementById("clear");
cls.addEventListener('click', clear);
// Not incorporated in the program:
// e.preventDefault()
// --- when called it prevents the default event from occurring
