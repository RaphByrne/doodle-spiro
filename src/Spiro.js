
function Spiro(numElements)
{
	this.spiroElements = [];
	let angleOffset = 2*Math.PI/numElements;
	for(var i = 0; i < numElements; i++)
	{
		let el = new SpiroElement(
			new Rectangle(10, 10, "#FFFFFF"),
			staticOrigin(0,0),
			staticSpeed(Math.PI/8),
			staticDistance(10)
		);
		el.orbitAngle = i*angleOffset;
		this.spiroElements.push(el);
	}
}

Spiro.prototype =
{
	update: function()
	{
		for(var i = 0; i < this.spiroElements.length; i++)
		{
			this.spiroElements[i].update();
		}
	},

	draw: function(context)
	{
		for(var i = 0; i < this.spiroElements.length; i++)
		{
			this.spiroElements[i].draw(context);
		}
	}

};

function SpiroElement(image, originFunc, angleFunc, distFunc)
{
	this.image = image;
	this.origin = {x: 0, y: 0};
	this.orbitAngle = 0;
	this.orbitDistance = 0;

	this.originFunc = originFunc.bind(this);
	this.angleFunc = angleFunc.bind(this);
	this.distFunc = distFunc.bind(this);
}

SpiroElement.prototype =
{
	update: function()
	{
		this.originFunc();
		this.angleFunc()
		//normalise the angle to the range (-PI, PI]
		this.orbitAngle = (this.orbitAngle % (2*Math.PI)) - Math.PI;
		this.distFunc();
		this.updateImage();
	},

	updateImage: function()
	{
		var offset = PolarToCartesian(this.origin,
			this.orbitDistance, this.orbitAngle);
		this.image.moveTo(offset.x, offset.y);
	},

	draw: function(context)
	{
		this.image.draw(context);
	}

}

function PolarToCartesian(origin, r, theta)
{
	var coords = {
		x: origin.x + r*Math.cos(theta),
		y: origin.y + r*Math.sin(theta)
	};
	return coords;
}

//movement functions
//use Function.bind to setup how element should behave
function staticOrigin(x, y)
{
	return function()
	{
		this.origin.x = x;
		this.origin.y = y;
	};
}

function staticSpeed(speed)
{
	return function()
	{
		this.orbitAngle += speed;
	};
}

function staticDistance(distance)
{
	return function()
	{
		this.orbitDistance = distance;
	};
}
