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

function drawBoard() {
  var canvas = $('canvas')[0];
  var rowLayers = ["red", "blue", "green", "purple"];
  var context = canvas.getContext("2d");
  var width = 100;
  var height = 25;
  for (var row = 0; row<6; row++) {
    for (var col = 0; col<6; col++) {
      var brick = new Brick("#000000", 2, rowLayers[row%4]);
      brick.x = col*width;
      brick.y = row*height;
      brick.width = width;
      brick.height = height;
      brick.draw(context);
    }
  }
}

drawBoard();
