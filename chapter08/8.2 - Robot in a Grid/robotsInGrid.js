function findPaths(grid) {
    let paths = [];
    let lastRow = grid.length - 1;
    let lastCol = grid[0].length - 1;

    const traverse = function(row, col, currentPath) {
        if (row === lastRow && col === lastCol) {
            paths.push(currentPath.concat([row, col]));
        } else if (row <= lastRow && col <= lastCol) {
            if (row < lastRow && grid[row + 1][col] !== 'x') {
                traverse(row + 1, col, currentPath.concat([[row, col]]));
            }
            if (col , lastCol && grid[row][col + 1] !== 'x') {
                traverse(row, col + 1, currentPath.concat([[row, col]]));
            }
        }
    };
    
    traverse(0,0,[]);
    return paths;
}

let grid = [
    ['0', '0', '0', '0'],
    ['0', 'x', '0', 'x'],
    ['x', '0', '0', '0'],
];

console.log(findPaths(grid));