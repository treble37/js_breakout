function Brick(strokeStyle, lineWidth, fillStyle) {
  this.strokeStyle = strokeStyle;
  this.lineWidth = lineWidth;
  Entity.call(this);
  this.fillStyle = fillStyle;
}

Brick.prototype.draw = function(context) {
  context.fillStyle = this.fillStyle; //color
  context.fillRect(this.x, this.y, this.width, this.height); //rectangle shape
  context.strokeRect(this.x, this.y, this.width, this.height); //outline
  context.strokeStyle = this.strokeStyle;
  context.lineWidth = this.lineWidth;
}

