const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var slingshot;

function preload(){

polygon_img=loadImage("polygon_img.png");

}

function setup() {

  createCanvas(1600,400);
  engine=Engine.create();
  world=engine.world;

  // polygon holder with slings
  polygon = Bodies.circle(100,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});

  ground = new Ground(800,380,1600,10)


//2nd Stack of blocks

Box18 = new Box(900,275,30,40);
Box19 = new Box(930,275,30,40);
Box20 = new Box(960,275,30,40);
Box21 = new Box(990,275,30,40);
Box22 = new Box(1020,275,30,40);
//Box23 = new Box(1050,275,30,40);
// Box24 = new Box(1080,275,30,40);
// Box25 = new Box(2010,275,30,40);

Box26 = new Box(930,235,30,40);
Box27 = new Box(960,235,30,40);

Box28 = new Box(990,235,30,40);

Box29 = new Box(960,195,30,40);
//Box30 = new Box(1050,235,30,40);
// Box31 = new Box(1240,235,30,40);
// Box32 = new Box(1270,235,30,40);
// Box33 = new Box(1320,235,30,40);


//level one

Box2 = new Box(300,275,30,40);
Box3 = new Box(330,275,30,40);
Box4 = new Box(360,275,30,40);
Box5 = new Box(390,275,30,40);
Box6 = new Box(420,275,30,40);
Box7 = new Box(450,275,30,40);
Box17 = new Box(480,275,30,40);

  //level two
Box8 = new Box(330,235,30,40);
Box9 = new Box(360,235,30,40);
Box10 = new Box(390,235,30,40);
Box11 = new Box(420,235,30,40);
Box12 = new Box(450,235,30,40);



//level three
Box13 = new Box(360,195,30,40);
Box14 = new Box(390,195,30,40);
Box15 = new Box(420,195,30,40);

//top
Box16 = new Box(390,155,30,40);

//fill("red")
//stand1=new Ground(800,380,1600,20);


stand1=new Ground(390,300,210,15);

stand2=new Ground(960,300,150,15);

}

function draw() {

  Engine.update(engine);

  background("255,255,255");  
  drawSprites();
  text("SCORE:"+score,750,40)

imageMode(CENTER)

image(polygon_img,polygon.position.x,polygon.position.y,40,40);

fill(184,66,66)
  ground.display();
  
  fill(135,206,234);
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();
  Box7.display();
  Box17.display();

  fill("pink");
  Box8.display();
  Box9.display();
  Box10.display();
  Box11.display();
  Box12.display();

fill(63,224,208);
  Box13.display();
  Box14.display();
  Box15.display(); 

fill(128,128,128);
  Box16.display();

  fill(135,206,234);
  Box18.display();
  Box19.display();
  Box20.display();
  Box21.display();
  Box22.display();
  //Box23.display();
  //Box24.display();
  //Box25.display();

  fill(63,224,208);
  Box26.display();
  Box27.display();
  Box28.display();

  fill("pink")
  Box29.display();
  //Box30.display();
  // Box31.display();
  // Box32.display();
  // Box33.display();
  // Box34.display();
  // Box35.display();
  // Box36.display();
  // Box37.display();

  fill(184,66,66)
  stand1.display();

  stand2.display();

slingshot.display();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(this.polygon);
  }
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }



function mouseReleased(){
slingshot.fly();
}

