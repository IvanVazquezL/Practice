function numIslands(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }

    const numRows = grid.length;
    const numColumns = grid[0].length;
    const LAND = '1';
    const VISITED = '-1';
    let numOfIslands = 0;

    for (let row = 0; row < numRows; row++) {
        for (let column = 0; column < numColumns; column++) {
            if (!isLand(row, column)) continue;

            numOfIslands++;
            const queueOfNeighbors = [];
            enqueueAndMarkVisitedNeighbor(row, column, queueOfNeighbors);

            while (queueOfNeighbors.length) {
                const currentFlatIndex = queueOfNeighbors.shift();
                const currentRow = Math.floor(currentFlatIndex/numColumns);
                const currentColumn = currentFlatIndex % numColumns;

                if (hasUpperNeighbor(currentRow) && isLand(currentRow - 1, currentColumn)) {
                    enqueueAndMarkVisitedNeighbor(currentRow - 1, currentColumn, queueOfNeighbors);
                }

                if (hasBottomNeighbor(currentRow) && isLand(currentRow + 1, currentColumn)) {
                    enqueueAndMarkVisitedNeighbor(currentRow + 1, currentColumn, queueOfNeighbors);
                }

                if (hasLeftNeighbor(currentColumn) && isLand(currentRow, currentColumn -1)) {
                    enqueueAndMarkVisitedNeighbor(currentRow, currentColumn -1, queueOfNeighbors);
                }

                if (hasRightNeighbor(currentColumn) && isLand(currentRow, currentColumn + 1)) {
                    enqueueAndMarkVisitedNeighbor(currentRow, currentColumn + 1, queueOfNeighbors);
                }
            }
        }
    }

    return numOfIslands;

    function hasRightNeighbor(column) {
        return column + 1 < numColumns;
    }

    function hasLeftNeighbor(column) {
        return column - 1 >= 0;
    }

    function hasBottomNeighbor(row) {
        return row + 1 < numRows;
    }

    function hasUpperNeighbor(row) {
        return row - 1 >= 0;
    }

    function isLand(row, col) {
        return grid[row][col] === LAND;
    }

    function enqueueAndMarkVisitedNeighbor(row, column, queueOfNeighbors) {
        const flatIndex = getFlatIndex(row, column);
        queueOfNeighbors.push(flatIndex);
        markAsVisited(row, column);
    }

    function getFlatIndex(row, column) {
        return row * numColumns + column;
    }

    function markAsVisited(row, column) {
        grid[row][column] = VISITED;
    }
}

function main() {
    console.log(numIslands([
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
      ]));
      console.log(numIslands([
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
      ]));
}

main();