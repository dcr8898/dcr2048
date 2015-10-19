$(document).ready(function() {

  $('#new-game').on('click', gameRunner);

});

var game;

function gameRunner() {
  game = new Game;
  game.addTile();
  game.addTile();
  View.update();
  $(document).on('keyup', gamePlay);
}

function gamePlay(event) {
  switch(event.which) {
    case 37:
      game.left();
      break;
    case 38:
      game.up();
      break;
    case 39:
      game.right();
      break;
    case 40:
      game.down();
  }
  View.update();
  game.addTile();
  View.update();
}
