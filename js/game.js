function Game() {

    this.grid = [0, 0, 0, 0,
                 0, 0, 0, 0,
                 0, 0, 0, 0,
                 0, 0, 0, 0];

    this.score = 0;

    this.goal = 2048;

    this.shift = function(groups, object) {
        return groups.map(function(group) {
            group = Util.compact(group);
            var retArray = [];
            while (group.length > 0) {
                if (group.length == 1) {
                    retArray.push(group.shift());
                } else if (group[0] == group[1]) {
                    object.score += group[0] * 2;
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
    this.grid = Util.decolumnize(cols);
};

Game.prototype.down = function() {
    var cols = Util.columnize(this.grid.reverse());
    cols = this.shift(cols, this);
    this.grid = Util.decolumnize(cols).reverse();
};

Game.prototype.left = function() {
    var rows = Util.rowify(this.grid);
    rows = this.shift(rows, this);
    this.grid = Util.derowify(rows);
};

Game.prototype.right = function() {
    var rows = Util.rowify(this.grid.reverse());
    rows = this.shift(rows, this);
    this.grid = Util.derowify(rows).reverse();
};

Game.prototype.addTile = function() {
    var empties = [];
    for (var i = 0; i < 16; i++) empties.push(i);
    empties = empties.filter(function(index) {
        return this.grid[index] === 0;
    }, this);
    var newTileIndex = empties[Math.floor(Math.random() * empties.length)];
    var newTile = (Math.random() * 1000) < 875 ? 2 : 4;
    this.grid[newTileIndex] = newTile;
};

Game.prototype.MoveAvailable = function() {
    if (this.grid.some(function(cell) {
        return cell === 0;
    })) return true;
    var groups = Util.rowify(this.grid).concat(Util.columnize(this.grid));
    return groups.some(Util.hasDouble);
};

Game.prototype.won = function() {
    return this.grid.some(function(element) {
        return element === this.goal
    }, this);
};

Game.prototype.toString = function() {
    var retString = "";
    for (var i = 0; i < 16; i++) {
        retString += Util.center(this.grid[i].toString(), 6, "&nbsp;");
        retString += (i % 4 == 3) ? "<br/>" : " ";
    }
    return retString;
};
