$(document).ready(function() {

  $('#new-game').on('click', gameRunner);

});

var game;

function gameRunner() {
  $(document).off('keyup');
  game = new Game;
  game.addTile();
  View.update();
  game.addTile();
  View.update();
  $(document).on('keyup', gamePlay);
}

function gamePlay(event) {
  var result;
  var direction;
  switch(event.which) {
    case 37:
      direction = 'left';
      result = game.left();
      break;
    case 38:
      direction = 'up';
      result = game.up();
      break;
    case 39:
      direction = 'right';
      result = game.right();
      break;
    case 40:
      direction = 'down';
      result = game.down();
  }
  if (!result) return;
  View.update();
  if (game.won) gameWon();
  if (!game.moveAvailable()) gameOver();
  game.addTile();
  View.update();
}

function gameWon() {
  $(document).off('keyup');
  alert('Yay! You Won!');
}

function gameOver() {
  $(document).off('keyup');
  alert('Sorry! You lost! :(');
}