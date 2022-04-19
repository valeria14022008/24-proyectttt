const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var Stone;
var rubber;
var Hierro;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    Stone = new stone(700,320,100,100);
    rubber = new Rubber(900,400,100);
    Hierro = new hierro (300,140,90,90);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    Hierro.display();
    Stone.display();
    rubber.display();
 
}