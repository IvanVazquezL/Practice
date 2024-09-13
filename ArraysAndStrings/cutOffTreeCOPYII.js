var cutOffTree = function(forest) {
    const trees = getTrees(forest);

    let numberOfSteps = 0;
    let startRow = 0;
    let startColumn = 0;

    for (const[_, targetRow, targetColumn] of trees) {
        const steps = breadthFirstSearch(forest, startRow, startColumn, targetRow, targetColumn);
        if (steps === -1) return -1;
        numberOfSteps += steps;
        startRow = targetRow;
        startColumn = targetColumn;
    }

    return numberOfSteps;
}

function breadthFirstSearch(forest, startRow, startColumn, targetRow, targetColumn) {
    const directions = [[-1,0], [1,0],[0,-1],[0,1]];

    const numRows = forest.length;
    const numColumns = forest[0].length;

    const isAtTargetPositionAlready = () =>
        startRow === targetRow &&
        startColumn === targetColumn;
    
    if (isAtTargetPositionAlready()) {
        return 0;
    }

    const queue = [[startRow, startColumn, 0]];
    const visited = getVisitedGrid(numRows, numColumns);

    while (queue.length) {
        const [row, column, distance] = queue.shift();

        for (const [deltaRow, deltaColumn] of directions) {
            const newRow = row + deltaRow;
            const newColumn = column + deltaColumn;

            const isWithinBounds = () =>
                newRow >= 0 && newRow < numRows &&
                newColumn >= 0 && newColumn < numColumns;
            const isUnvisited = () => !visited[newRow][newColumn];
            const isWalkable = () => forest[newRow][newColumn] !== 0;
            const hasReachedDestination = () =>
                newRow === targetRow && 
                newColumn === targetColumn;

            if (isWithinBounds() && isUnvisited() && isWalkable()) {
                if (hasReachedDestination()) {
                    return distance + 1;
                }

                visited[newRow][newColumn] = true;
                queue.push([newRow, newColumn, distance + 1]);
            }
        }
    }

    return -1
}

function getVisitedGrid(numRows, numColumns) {
    const visited = [];

    for (let row = 0; row < numRows; row++) {
        visited[row] = [];
        for (let column = 0; column < numColumns; column++) {
            visited[row][column] = false;
        }
    }

    return visited;
}

function getTrees(forest) {
    const trees = [];
    const numRows = forest.length;
    const numColumns = forest[0].length;

    for (let row = 0; row < numRows; row++) {
        for (let column = 0; column < numColumns; column++) {
            if (forest[row][column] > 1) {
                trees.push([forest[row][column], row, column])
            }
        }
    }

    return trees.sort((a,b) => a[0] - b[0]);
}

function main() {
    console.log(cutOffTree([[1,2,3],[0,0,4],[7,6,5]]));
    //console.log(cutOffTree([[1,2,3],[0,0,0],[7,6,5]]));
    //console.log(cutOffTree([[2,3,4],[0,0,5],[8,7,6]]));
}

main();