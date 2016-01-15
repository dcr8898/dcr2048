var View = {

  update: function() {
    game.grid.forEach(function(tile, index) {
      if (tile !== 0) {
        $('#grid-' + index).text(tile);
      } else {
        $('#grid-' + index).text('-');
      }
    });
    $('#score').text(game.score);
    $('#high-score').text(highScore);
  }

};
