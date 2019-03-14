// Given an image represented by an NxN matrix, write a method to rotate the image by 90 degrees.  Can you do it in place?  

// O(N^2) time, O(1) space.  We touch every element, swapping values from the top to the left.  
const rotateMatrix = matrix => {
    if (matrix.length === 0 || matrix.length !== matrix[0].length) return false;
    let n = matrix.length;

    for (let layer = 0; layer < Math.floor(n / 2); layer++) {
        let first = layer;
        let last = n - 1 - layer;
        for (let i = first; i < last; i++) {
            let offset = i - first;
            let top = matrix[first][i]; // save the top!

            // Left to Top
            matrix[first][i] = matrix[last - offset][first];
            // Bottom to Left
            matrix[last - offset][first] = matrix[last][last - offset];
            // Right to Bottom
            matrix[last][last - offset] = matrix[i][last];
            // Top to Right
            matrix[i][last] = top; 
        }
    }
    return matrix;
}
let matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
console.log(rotateMatrix(matrix));