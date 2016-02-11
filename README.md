# dcr2048

This project implements the MVC pattern in javascript in the form of a clone of the brilliant [2048](https://gabrielecirulli.github.io/2048/) game by Gabriele Cirulli.

The 'model' is the game object, found in [game.js](https://github.com/dcr8898/dcr2048/blob/master/js/game.js).  It contains the core game logic.

The 'view' is found in [view.js](https://github.com/dcr8898/dcr2048/blob/master/js/view.js), which contains all of the code to show and update the game board.

The 'controller' is found in [application.js](https://github.com/dcr8898/dcr2048/blob/master/js/application.js).  This code acts as the basic "game runner," which interacts with the model and updates the view as needed.  The event handlers for the new game function and for capturing key strokes during game play both live here at the moment.  A 'pure' implementation of MVC would probably have me move these event handlers to the view layer.

Finally, I wrote a small collection of utility functions.  They are collected in [util.js](https://github.com/dcr8898/dcr2048/blob/master/js/util.js).

TO DO:

* Improve overall styling
* Implement some cool CSS transforms to animate the game presentation.

Please [enjoy](http://rossney.net/2048)!
