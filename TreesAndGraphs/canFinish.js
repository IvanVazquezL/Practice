/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish (numCourses, prerequisites) {
    const adjacencyList = linkPrerequisitesToCourses(numCourses, prerequisites);
    const visitedCourses = new Set();
    const inStack = new Set();

    for (let course = 0; course < numCourses; course++) {
        if (!visitedCourses.has(course) && checkForCycleInPrerequisites(course)) {
            return false;
        }
    }

    return true;

    function checkForCycleInPrerequisites(course) {
        // If the node is already in the stack, we have a cycle.
        if (isPartOfCycle(course)) {
            return true;
        }

        if (visitedCourses.has(course)) {
            return false;
        }

        visitedCourses.add(course);
        inStack.add(course);

        for (const neighbor of adjacencyList.get(course)) {
            if (checkForCycleInPrerequisites(neighbor)) {
                return true;
            }
        }

        inStack.delete(course);
        return false;
    }

    function isPartOfCycle(course) {
        return inStack.has(course);
    }
}; 

function linkPrerequisitesToCourses(numCourses, prerequisites) {
    const adjacencyList = new Map();

    for (let course = 0; course < numCourses; course++) {
        adjacencyList.set(course, []);
    }

    for (const [course, prerequisite] of prerequisites) {
        adjacencyList.get(prerequisite).push(course)
    }

    return adjacencyList;
}

function main() {
    console.log(canFinish(2, [[1,0]]));
    console.log(canFinish(2, [[1,0],[0,1]]));
}

main();