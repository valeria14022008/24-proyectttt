class hierro{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	
	var options={
		'restitution':1,
		'friction': 0.4,
		'density':7,
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
 }
 display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('red')
    fill('red')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
 }
}