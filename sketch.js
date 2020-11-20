
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	bImage=loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

  ground=new Ground(600,595,1200,10);
  
  tree=new Tree(500,330);

  mango1=new Mango(515,235,70);
  mango2=new Mango(600,300,70);
  mango3=new Mango(690,210,70);
  mango4=new Mango(760,300,70);
  mango5=new Mango(860,200,70);
  mango6=new Mango(960,300,70);
  mango7=new Mango(1060,200,70);
  mango8=new Mango(960,120,70);
  mango9=new Mango(1160,120,70);
  mango10=new Mango(1160,300,70);

  stone=new Stone(156,493,70);

  boy=createSprite(200,545,20,50);
	boy.addImage("boy",bImage);
  boy.scale=0.1;
  
  launcher=new Launcher(stone.body,{x:200,y:545});

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  Engine.update(engine);

  background("white");

  stroke("black");
  textSize(15);
  text("Press SPACE to get a second chance to play",100,30);
  
  ground.display();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stone.display();

  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher.fly();
  distance=int(dist(stone.x,stone.y,mango1.x,mango1.y));
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:235,y:420});
    launcher.attach(stone.body);
  }
}

function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position;
 stoneBodyPosition=lstone.body.position;

 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

 if(distance<=lmango.r+lstone.r){
   Matter.Body.setStatic(lmango.body,false);  
 }
}
