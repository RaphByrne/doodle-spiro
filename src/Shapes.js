
//polygon constructor
function Polygon(points, fillStyle)
{
	this.points = points;
	this.fillStyle = fillStyle;
	this.scale = {x: 1, y: 1};
	this.rotation = 0;
	this.translation = {x: 0, y: 0};
}

//define polygon methods here
Polygon.prototype = 
{
	
	draw: function(context)
	{
		context.save();
		context.fillStyle = this.fillStyle;
		context.scale(this.scale.x, this.scale.y);
		context.rotate(this.rotation);
		context.translate(this.translation.x, this.translation.y);
		context.beginPath();
		context.moveTo(this.points[0].x, this.points[0].y);
		for(let i = 1; i < this.points.length; i++)
		{
			context.lineTo(this.points[i].x, this.points[i].y);
		}
		context.fill();
		context.restore();
	}
	
	
	
};

//Rect subclass constructor
function Rectangle(width, height, fillStyle)
{
	Polygon.call(this, 
	[
	{x: -width/2, y: -height/2},
	{x: width/2, y: -height/2},
	{x: width/2, y: height/2},
	{x: -width/2, y: height/2}
	],
	fillStyle
	);
}

//set Rect to inherit from Polygon
Rectangle.prototype = Object.create(Polygon.prototype);
Rectangle.prototype.constructor = Rectangle;

//Rectangle method
//Rectangle.prototype.method = function(){};