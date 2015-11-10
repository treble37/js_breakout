function Entity() {
//Game is composes of entities...

//position(s)
  this.x = 0;
  this.y = 0;

//dimension
  this.width = 10;
  this.height = 10;

//velocity
  this.xVelocity = 0;
  this.yVelocity = 0;
}

//Move the entity by overriding this method

Entity.prototype.update = function() {
  this.x += this.xVelocity;
  this.y += this.yVelocity;
}

Entity.prototype.draw = function(context) {
  context.fillStyle = this.fillStyle; //color
  context.fillRect(this.x, this.y, this.width, this.height); //rectangle shape
}


