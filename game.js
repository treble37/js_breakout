function Game(canvas) {
  var self = this
  this.context = canvas.getContext("2d")
  this.width = canvas.width
  this.height = canvas.height

  //track keystates (e.g., keyup, keydown, etc.)
  this.keyPressed = {}

}

// Some key code to key name mappings
Game.keys = {
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
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

function drawBall() {
  var canvas = $('canvas')[0];
  var context = canvas.getContext("2d");
  var ball = new Ball();
  ball.reset(); //reset position
  ball.draw(context);
}
drawBoard();
drawBall();
