var canvas;
var context;
var spiro;

function initAll()
{
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	context.fillStyle = "#000000";
	context.fillRect(0, 0, canvas.width, canvas.height);
	spiro = new Spiro(10);
	draw();
}

function draw()
{
	context.save();
	//put everything at the origin
	context.translate(canvas.width/2, canvas.height/2);
	spiro.update();
	spiro.draw(context);
	context.restore();
}
