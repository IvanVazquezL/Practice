var floodFill = function(image, startRow, startColumn, newColor) {
    const color = image[startRow][startColumn];
    const numRows = image.length;
    const numColumns = image[0].length;

    if (color !== newColor) {
        depthFirstSearch(image, startRow, startColumn, color, newColor);
    }

    return image;

    function depthFirstSearch(image, row, column, color, newColor) {
        if (image[row][column] === color) {
            image[row][column] = newColor;

            if (row - 1 >= 0) {
                depthFirstSearch(image, row - 1, column, color, newColor);
            }

            if (column - 1 >= 0) {
                depthFirstSearch(image, row, column - 1, color, newColor);
            }

            if (row + 1 < numRows) {
                depthFirstSearch(image, row + 1, column, color, newColor);
            }

            if (column + 1 < numColumns) {
                depthFirstSearch(image, row, column + 1, color, newColor);
            }
        }
    }
}

function main() {
    console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))
}

main()