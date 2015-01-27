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


