const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,playerbase;
var computer,computerbase;


function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  computer = new Computer(150,200,160,310);
  computerbase = new Computerbase(680,200,160,310);
  playerbase = new PlayerBase(300,random(450,height-300),180,150);
  player = new Player(250,playerbase.body.position.y-153,50,180);
  
  

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
computer.show();
computerbase.display();
player.see();
playerbase.saw();

   //display Player and computerplayer


}
           