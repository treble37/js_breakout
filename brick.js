function Brick(strokeStyle, lineWidth, fillStyle) {
  this.strokeStyle = strokeStyle;
  this.lineWidth = lineWidth;
  Entity.call(this);
  this.fillStyle = fillStyle;
}

Brick.prototype.draw = function(context) {
  context.fillStyle = this.fillStyle; //color
  context.fillRect(this.x, this.y, this.width, this.height); //rectangle shape
}

function drawBoard() {
  var canvas = $('canvas')[0];
  this.context = canvas.getContext("2d");
  var brick = new Brick("#0000FF", 2, "red");
  brick.x = canvas.width / 3;
  brick.y = canvas.height / 3;
  brick.draw(this.context);
}

drawBoard();
