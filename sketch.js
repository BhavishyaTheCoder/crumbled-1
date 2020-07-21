var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	  dustbin1=createSprite(500,650,50,20);
	  dustbin2=createSprite(470,630,10,60);
	  dustbin3=createSprite(530,630,10,60);

	  ground=createSprite(400,690,800,50);
	  ground.shapeColor="brown";

	  



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}


	




