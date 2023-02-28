
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1450, 750);
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		
		friction:0,
		density:1.2,
	}

	engine = Engine.create();
	world = engine.world;
	ground = new Ground (725,700,1450,20);
	leftWall = new Ground(800,600,20,200);
	rightWall = new Ground(1200,600,20,200);
	//Create the Bodies Here.
	ball = Bodies.circle(200,200,10,ball_options);
	World.add(world, ball);
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ground.display();
  leftWall.display();
  rightWall.display();
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20 ,20 )
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:20,y:-20})
	}
}





