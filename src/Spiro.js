
function SpiroElement(originFunc, speedFunc, distFunc)
{
	this.origin = {x: 0, y: 0};
	this.orbitSpeed = 0;
	this.orbitDistance = 0;
	
	this.originFunc = originFunc.bind(this);
	this.speedFunc = speedFunc.bind(this);
	this.distFunc = distFunc.bind(this);
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
		this.orbitSpeed = speed;
	};
}

function staticDistance(distance)
{
	return function()
	{
		this.orbitDistance = distance;
	};
}