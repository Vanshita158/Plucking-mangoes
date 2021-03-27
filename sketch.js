
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg
var engine, world;

function preload()
{
	boyImg= loadImage("Pluckingmangoes/boy.png")
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground= new Ground(650,600,1300,20)
	 tree= new Tree(620,320,390,550)
	 stone= new Stone(235,420,25,25)
	 mango1= new Mango(699,182,30,30)
	 mango2= new Mango(532,179,30,30)
	 mango3= new Mango(593,140,30,30)
	 mango4= new Mango(674,124,30,30)
	 mango5= new Mango(615,238,30,30)

	 slingShot = new Slingshot(stone.body,{x:235,y:420})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boyImg,200,340,200,300)
  ground.display()
  tree.display()

  stone.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()

  slingShot.display()
  text(mouseX + ',' + mouseY, 10, 15)


 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.ball)
  }

}