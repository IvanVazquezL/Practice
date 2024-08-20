var rotate = function(matrix) {
    const n = matrix.length;

    for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            const temp = matrix[n - 1 - j][i];
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
            matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 - i];
            matrix[j][n - 1 - i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
};

/*
const matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix1);
console.log(matrix1);

const matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(matrix2);
console.log(matrix2);
*/

const matrix3 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
rotate(matrix3);
console.log(matrix3);