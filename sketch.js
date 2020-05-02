const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,bob;

function setup(){
   var  canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var Hoptions = {
isStatic:true

    }
    var Boptions = {
restitution:1.0,
density:1.0
    }
    bob = Bodies.circle(220,200,40,Boptions) 
    World.add(world,bob)
    holder = Bodies.rectangle(200,100,200,20,Hoptions)
    World.add(world,holder)


var options = {
bodyA:bob,
bodyB:holder,
stiffness:0.04,
length:100
}
var chain = Constraint.create(options)
World.add(world,chain)

}
function draw(){
    background(0);
    Engine.update(engine);
       
  
   fill("pink")
   rectMode(CENTER);
   rect(holder.position.x,holder.position.y,200,20)
   fill("blue")
   ellipseMode(RADIUS)
   ellipse(bob.position.x,bob.position.y,40)
   strokeWeight(8);
   stroke("white")
  line(bob.position.x,bob.position.y,holder.position.x,holder.position.y)

  if(keyCode===32){
bob.position.y = mouseY;
bob.position.x = mouseX;

  }else if(keyCode===ENTER){
bob.position.x = 200;

  }


}