var canvas;
var context;
var rect;

function initAll()
{
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	context.fillStyle = "#000000";
	context.fillRect(0, 0, canvas.width, canvas.height);
	rect = new Rectangle(200, 200, "#FFFFFF");
	draw();
}

function draw()
{
	context.save();
	//put everything at the origin
	context.translate(canvas.width/2, canvas.height/2);
	rect.draw(context);
	context.restore();
}