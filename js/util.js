var Util = {

    transpose: function(array) {
        var rowCount = array.length;
        var colCount = array[0].length;
        var retArray = [];
        for (var i = 0; i < rowCount; i++) {
            retArray[i] = [];
        }
        for (i = 0; i < rowCount; i++) {
            for (var j = 0; j < colCount; j++) {
                retArray[j][i] = array[i][j];
            }
        }
        return retArray;
    },

    flatten: function(array) {
        return [].concat.apply([], array);
    },

    pad: function(array) {
        if (array.length == 4) return array;
        return array.concat([0, 0, 0, 0].slice(0, 4 - array.length));
    },

    compact: function(array) {
        return array.filter(function(element) { return element !== 0 });
    },

    rowify: function(array) {
        var retArray = [];
        for (var i = 0; i < 4; i++) {
            retArray[i] = array.slice(i * 4, (i * 4) + 4);
        }
        return retArray;
    },

    derowify: function(array) {
        return Util.flatten(array);
    },

    columnize: function(array) {
        return Util.transpose(Util.rowify(array));
    },

    decolumnize: function(array) {
        return Util.flatten(Util.transpose(array));
    },

    hasDouble: function(groups) {
        groups.forEach(function(group) {
            for (var i = 0; i < 3; i++) {
                if (group[i] == group[i + 1]) return true;
            }
        });
        return false;
    },

    center: function(string, length, fillChar) {
        fillChar = typeof fillChar !== 'undefined' ? fillChar : " ";
        if (string.length >= length) return string;
        padSize = length - string.length;
        return Array(Math.floor(padSize / 2) + 1).join(fillChar) +
               string +
            Array(Math.ceil(padSize / 2) + 1).join(fillChar);
   }

};
