GOAL = 2048;
CHANCE_OF_FOUR_TILE = .125;

function Game() {

    this.grid = [0, 0, 0, 0,
                 0, 0, 0, 0,
                 0, 0, 0, 0,
                 0, 0, 0, 0];

    this.score = 0;

    this.won = false;

    this.shift = function(groups, object) {
        return groups.map(function(group) {
            group = Util.compact(group);
            var retArray = [];
            while (group.length > 0) {
                if (group.length == 1) {
                    retArray.push(group.shift());
                } else if (group[0] == group[1]) {
                    var newTileValue = group[0] * 2;
                    object.score += newTileValue;
                    object.won = (newTileValue == GOAL);
                    retArray.push(group.shift() + group.shift());
                } else {
                    retArray.push(group.shift());
                }
            }
            return Util.pad(retArray);
        });
    };

}

Game.prototype.up = function() {
    var cols = Util.columnize(this.grid);
    cols = this.shift(cols, this);
    var newGrid = Util.decolumnize(cols);
    if (Util.eq(this.grid, newGrid)) return false;
    this.grid = newGrid;
    return true;
};

Game.prototype.down = function() {
    var cols = Util.columnize(this.grid.reverse());
    cols = this.shift(cols, this);
    var newGrid = Util.decolumnize(cols).reverse();
    if (Util.eq(this.grid.reverse(), newGrid)) return false;
    this.grid = newGrid;
    return true;
};

Game.prototype.left = function() {
    var rows = Util.rowify(this.grid);
    rows = this.shift(rows, this);
    var newGrid = Util.derowify(rows);
    if (Util.eq(this.grid, newGrid)) return false;
    this.grid = newGrid;
    return true;
};

Game.prototype.right = function() {
    var rows = Util.rowify(this.grid.reverse());
    rows = this.shift(rows, this);
    var newGrid = Util.derowify(rows).reverse();
    if (Util.eq(this.grid.reverse(), newGrid)) return false;
    this.grid = newGrid;
    return true;
};

Game.prototype.addTile = function() {
    var empties = [];
    for (var i = 0; i < 16; i++) empties.push(i);
    empties = empties.filter(function(index) {
        return this.grid[index] === 0;
    }, this);
    var newTileIndex = empties[Math.floor(Math.random() * empties.length)];
    var newTile = Math.random() >= CHANCE_OF_FOUR_TILE ? 2 : 4;
    this.grid[newTileIndex] = newTile;
};

Game.prototype.moveAvailable = function() {
    if (this.grid.some(function(tile) { return tile === 0; })) return true;
    var groups = [];
    groups = groups.concat(Util.rowify(this.grid), Util.columnize(this.grid));
    return Util.hasDouble(groups);
};

Game.prototype.toString = function() {
    var retString = "";
    for (var i = 0; i < 16; i++) {
        retString += Util.center(this.grid[i].toString(), 6, "&nbsp;");
        retString += (i % 4 == 3) ? "<br/>" : " ";
    }
    return retString;
};
