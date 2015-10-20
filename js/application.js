$(document).ready(function() {

  $('#new-game').on('click', gameRunner);

});

var game;

function gameRunner() {
  game = new Game;
  game.addTile();
  game.addTile();
  View.update();
  $(document).off('keyup');
  $(document).on('keyup', gamePlay);
}

function gamePlay(event) {
  var result;
  switch(event.which) {
    case 37:
      result = game.left();
      break;
    case 38:
      result = game.up();
      break;
    case 39:
      result = game.right();
      break;
    case 40:
      result = game.down();
  }
  if (!result) alert("Sorry, you can't do that right now");
  View.update();
  game.addTile();
  View.update();
}
