const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pillar1,pillar2,wall1,wall2,overhang;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    window1 = new Window (100,300,40,50);
    window2 = new Window (100,225,40,50);
    window3 = new Window (300,225,40,50);
    window4 = new Window (300,300,40,50);
    pillar1 = new Box(100,250,50,300);
    pillar2 = new Box(300,250,50,300);
    wall1 = new Box (200,250,100,300)
    wall2 = new Box (200,150,300,50)
    wall3 = new Box (138,350,25,250)
    wall4 = new Box (262,350,25,250)
    door = new Door (200,350,75,150)
    

    ground = new Ground (200,390,400,20,"brown")

}

function draw(){
    background(0);
    Engine.update(engine);
    pillar1.display();
    pillar2.display();
    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();
    window1.display();
    window2.display();
    window3.display();
    window4.display();
    door.display();
    ground.display();
}