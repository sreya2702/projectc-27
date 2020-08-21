
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,bob1,bob2,bob3,bob4,bob5,bob6,ground;
var rope1,rope2,rope3,rope3,rope6;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(590,50,150,10);
	
	var bob_options = {
		isStatic:true,
		restitution:0.1
	}
	
	bob1 = Bodies.circle(600,150,10,bob_options);
	World.add(world,bob1);
	
	bob2 = Bodies.circle(620,150,10,bob_options);
	World.add(world,bob2);
	
	bob3 = Bodies.circle(640,150,10,bob_options);
	World.add(world,bob3);
	
	bob4 = Bodies.circle(580,150,10,bob_options);
	World.add(world,bob4);	
	
	bob5 = Bodies.circle(560,150,10,bob_options);
	World.add(world,bob5);	
	
	bob6 = Bodies.circle(540,150,10,bob_options);
	World.add(world,bob6);


	
	//ground = (600,550,1200,10);
	//World.add(world,ground);
	Engine.run(engine);
  
}
 

function draw() {
  rectMode(CENTER);
  background(225);
 
  roof.display();
 
   ellipseMode(RADIUS);
  ellipse(bob1.position.x,bob1	.position.y,10,10);
 
  ellipseMode(RADIUS);
  ellipse(bob2.position.x,bob2.position.y,10,10);
 
  ellipseMode(RADIUS);
  ellipse(bob3.position.x,bob3.position.y,10,10); 
 
  ellipseMode(RADIUS);
  ellipse(bob4.position.x,bob4.position.y,10,10);   
 
  ellipseMode(RADIUS);
  ellipse(bob5.position.x,bob5.position.y,10,10);
  
  ellipseMode(RADIUS);
  ellipse(bob6.position.x,bob6.position.y,10,10); 
  drawSprites();
}

 

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:600,y:-150});
  }
}
