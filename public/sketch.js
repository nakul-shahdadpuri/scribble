var socket;

function setup()
{
	createCanvas(900,900);
	background(100);
	socket = io.connect("http://localhost:3000/")
}

function draw()
{
	
	noStroke(0);
	fill(0,255,0);
	circle(mouseX,mouseY,30);
}