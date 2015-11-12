function Ball() {
  Entity.call(this);
  this.width = 20;
  this.height = 20;
  this.fillStyle = "#000000";
}

Ball.prototype = Object.create(Entity.prototype);

Ball.prototype.constructor = Ball;

// Reset the ball's position
Ball.prototype.reset = function() {
  this.x = 640/2;
  this.y = 240;
}

