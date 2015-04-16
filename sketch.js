// Code for playing with forces:
// Inspired by The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var movers = [];
var direction=1;
var keyPress=false;

function setup() {
  createCanvas(1000, 500);
  colorMode(HSB);

  for (var i = 0; i < 10; i++) {
    tint=color(random(10, 30),55,100);
    movers[i] = new Mover(tint, random(1, 4), random(width), 0);
  }
}

function draw() {
  background(0,255,0);
  if(keyPress==true)
  {
    for (var i = 0; i < movers.length; i++) 
      movers[i].display();
    
  }
    else{
  for (var i = 0; i < movers.length; i++) {
    var wind = createVector(0.01, 0);

    if(direction==1)
    {  var gravity = createVector(0, 0.1*movers[i].mass);}
    else
    { var gravity = createVector(0, -0.1*movers[i].mass);}

    var c = 0.01;
    var normal = 1;
    var frictionMag = c * normal;
    var friction = movers[i].velocity.get();
    friction.mult(-1);
    friction.normalize();
    friction.mult(frictionMag);

    movers[i].applyForce(friction);
    movers[i].applyForce(wind);
    movers[i].applyForce(gravity);
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
    }
  }
}

function keyPressed()
{
  keyPress=true;

}
function keyReleased()
{
  keyPress=false;
  direction=1-direction;
}