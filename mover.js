// Code for playing with forces:
// Inspired by The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var Mover = function(t, m, x, y) {
  this.tint =t;
  this.mass = m;
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);

  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  };
    
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(this.tint);
    ellipse(this.position.x, this.position.y, this.mass*16, this.mass*16);
  };

  this.checkEdges = function() {
    if (this.position.x > width-this.mass*8) {
      //frame bottom
      this.position.x = width-this.mass*8;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      //frame top
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > height-this.mass*8) {
      //frame right
      this.velocity.y *= -1;
      this.position.y = height-this.mass*8;
    } else if (this.position.y < 0) {
      //frame left
      this.velocity.y *= -1;
      this.position.y = 0;
    }

  };

};
  




