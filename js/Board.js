class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }
    
    createSpaces() {
        var spaces = [];

        for (let i = 0; i < this.columns; i++) {
            var column = [];
            for (let j = 0; j < this.rows; j++) {
                var space = new Space(i, j);
                column.push(space);
            }
            spaces.push(column);
        }
        return spaces;
    }

    drawHTMLBoard() {
        for (let column of this.spaces) {
            for (let space of column) {
                space.drawSVGSpace();
            }
        }
    }
}