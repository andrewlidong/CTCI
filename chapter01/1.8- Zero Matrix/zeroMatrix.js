// Write an algorithm such that if an element in an MxN matrix is 0, it's entire row and column are set to zero.  

const zeroMatrix = matrix => {
    let rows = new Array(matrix.length).fill(false);
    let columns = new Array(matrix[0].length).fill(false);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rows[i] = true;
                columns[j] = true;
            }
        }
    }

    const nullifyRow = (matrix, row) => {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[row][j] = 0;
        }
    }

    const nullifyColumn = (matrix, column) => {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][column] = 0;
        }
    }

    for (let i = 0; i < rows.length; i++) {
        if (rows[i]) {
            nullifyRow(matrix, i);
        }
    }

    for (let j = 0; j < columns.length; j++) {
        if (columns[j]) {
            nullifyColumn(matrix, j);
        }
    }
    return matrix;
}

let matrix = [
    [1,2,3,4,0],
    [6,7,8,0,2],
    [1,2,3,4,5]
];

console.log(zeroMatrix(matrix));