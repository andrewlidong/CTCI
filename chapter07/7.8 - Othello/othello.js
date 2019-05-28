class OthelloPiece {
    constructor(color) {
        this.side = color;
    }

    flip() {
        if (this.side === 'white') {
            this.side = 'black';
        } else {
            this.side = 'white';
        }
    }

}

class OthelloBoard {
    constructor(N = 8) {
        if (N % 2 === 0) { throw 'error: board must have even length' };
        this.N = N;
        this.board = this.generateBoard(N);
        this.board[N/2 - 1][N/2 - 1] = new OthelloPiece('white');
        this.board[N/2][N/2] = new OthelloPiece('white');
        this.board[N/2 - 1][N/2] = new OthelloPiece('black');
        this.board[N/2][N/2 - 1] = new OthelloPiece('black');
    }

    generateBoard(N) {
        let board = [];
        for (let i = 0; i < N; i++) {
            let row = [];
            for (let j = 0; j < N; j++) {
                row.push(null);
            }
            board.push(row);
        }
        return board;
    }

    logBoard() {
        for (let i = 0; i < this.N; i++) {
            console.log(this.board[i].map((piece) => {
                return piece !== null ? piece.side : null;
            }));
        }
    }

    placePiece(color, row, col) {
        if (this.board[row][col] === null) {
            console.log('position already occupied');
        } else if (!this.legalMove(color, row, col)) {
            console.log('not a legal move');
        } else {
            this.board[row][col] = new OthelloPiece(color);
            this.flipPieces(color, row, col);
        }
    }

    canFlip(color, row, col, direction) {
        const directionPos = {
            up: [-1, 0],
            down: [1, 0],
            left: [0, -1],
            upLeft: [-1, -1],
            upRight: [-1, 1],
            downLeft: [1, -1],
            downRight: [1, 1]
        };

        const flipColor = {
            white: 'black',
            black: 'white'
        };

        let move = directionPos[direction];
        let currRow = row + move[0];
        let currCol = col + move[1];
        if (currRow === this.N || currCol === this.N || currRow === -1 || currCol === -1) {
            return false;
        }
        if (this.board[currRow][currCol] === null || this.board[currRow][currCol].side === color) {
            return false;
        }
        while(this.board[currRow][currCol] === null && this.board[currRow][currCol].side === flipColor[color]) {
            currRow = currRow + move[0];
            currCol = currCol + move[1];
        }
        return this.board[currRow][currCol] !== null && this.board[currRow][currCol].side === color;
    }

    PiecesToFlip(color, row, col) {
        return this.canFlip(color, row, col, 'up') ||
        this.canFlip(color, row, col, 'down') ||
        this.canFlip(color, row, col, 'left') ||
        this.canFlip(color, row, col, 'right') ||
        this.canFlip(color, row, col, 'upLeft') ||
        this.canFlip(color, row, col, 'upRight') ||
        this.canFlip(color, row, col, 'downLeft') ||
        this.canFlip(color, row, col, 'downRight');
    }

    legalMove(color, row, col) {
        console.log('checking legal move');
        if (this.board[row][col] !== null) {
            console.log(`${row}, ${col} is already occupied`);
            return false;
        } else if (!this.PiecesToFlip(color, row, col)) {
            console.log(`${row}, ${col} - no pieces for ${color} to flip`);
            return false;
        } else {
            return true;
        }
    }

    flipPiece(color, row, col, direction) {
        const directionPos = {
            up: [-1, 0],
            down: [1, 0],
            left: [0, -1],
            upLeft: [-1, -1],
            upRight: [-1, 1],
            downLeft: [1, -1],
            downRight: [1, 1]
        };

        let flipColor = {
            white: 'black',
            black: 'white'
        };

        let movement = directionPos[direction];
        let currRow = row + movement[0];
        let currCol = col + movement[1];
        while (this.board[currRow][currCol].side === flipColor[color]) {
            this.board[currRow][currCol].side = color;
            currRow = row + movement[0];
            currCol = col + movement[1];
        }
    }

    flipPieces(color, row, col) {
        if (this.canFlip(color, row, col, 'up')) {
            this.flipPiece(color, row, col, 'up');
        }

        if (this.canFlip(color, row, col, 'down')) {
            this.flipPiece(color, row, col, 'down');
        }

        if (this.canFlip(color, row, col, 'left')) {
            this.flipPiece(color, row, col, 'left');
        }

        if (this.canFlip(color, row, col, 'right')) {
            this.flipPiece(color, row, col, 'right');
        }

        if (this.canFlip(color, row, col, 'upLeft')) {
            this.flipPiece(color, row, col, 'upLeft');
        }

        if (this.canFlip(color, row, col, 'upRight')) {
            this.flipPiece(color, row, col, 'upRight');
        }

        if (this.canFlip(color, row, col, 'downLeft')) {
            this.flipPiece(color, row, col, 'downLeft');
        }

        if (this.canFlip(color, row, col, 'downRight')) {
            this.flipPiece(color, row, col, 'downRight');
        }
    }

    placePiece(color, row, col) {
        if (!this.legalMove(color, row, col)) {
            console.log('this move is not legal');
        } else {
            console.log('Placing piece');
            this.board[row][col] = new OthelloPiece(color);
            this.flipPieces(color, row, col);
        }
    }

    checkScore() {
        let score = {
            black: 0,
            white: 0
        };

        for (let i = 0; i < this.N; i++) {
            for (let j = 0; j < this.N; j++) {
                if (this.board[i][j] !== null) {
                    score[this.board[i][j].side]++;
                }
            }
        }
        console.log(`The score is: black ${score.black}, white ${score.white}`);
    }
}

let OB = new OthelloBoard();
OB.logBoard();
OB.checkScore();
OB.placePiece('black', 2, 3);
OB.logBoard();
OB.placePiece('white', 5, 5);
OB.placePiece('white', 4, 2);
OB.logBoard();
OB.placePiece('black', 7, 7);
OB.placePiece('black', 5, 5);
OB.logBoard();