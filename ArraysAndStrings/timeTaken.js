var timeTaken = function(arrival, states) {
    const ENTER = 0;
    const EXIT = 1;
    let lastPerson = -1;
    let currentTime = arrival[0];
    const times = [...arrival];

    let entering = indexAfter(states, ENTER);
    let exiting = indexAfter(states, EXIT);

    while (entering < arrival.length && exiting < arrival.length) {
        currentTime = Math.max(
            currentTime,
            Math.min(arrival[entering], arrival[exiting])
        );

        const enteringQueued = arrival[entering] <= currentTime;
        const exitingQueued = arrival[exiting] <= currentTime;

        const wasTheDoorUsedInTheLastSecond = times[lastPerson] === currentTime - 1;
        const wereTwoPeopleWantingToUseTheDoorAtTheSameTime = enteringQueued && exitingQueued;

        if (wereTwoPeopleWantingToUseTheDoorAtTheSameTime && wasTheDoorUsedInTheLastSecond) {
            const wasTheLastPersonEntering = states[lastPerson] === ENTER;
            const wasTheLastPersonExiting = states[lastPerson] === EXIT;

            //  If the door was used in the previous second for entering, the person who wants to enter goes first.
            if (wasTheLastPersonEntering) {
                letEnter();
            //  If the door was used in the previous second for exiting, the person who wants to exit goes first.
            } else if (wasTheLastPersonExiting) {
                letExit();
            }
        // If the door was not used in the previous second, then the person who wants to exit goes first.
        } else if(exitingQueued) {
            letExit();
        } else {
            letEnter();
        }
    }

    while (entering < arrival.length) {
        letEnter();
    }

    while (exiting < arrival.length) {
        letExit();
    }

    return times;

    function letEnter() {
        currentTime = Math.max(currentTime, arrival[entering]);
        lastPerson = entering;
        times[entering] = currentTime;
        currentTime++;
        entering = indexAfter(states, ENTER, entering);
    }

    function letExit() {
        currentTime = Math.max(currentTime, arrival[exiting]);
        lastPerson = exiting;
        times[exiting] = currentTime;
        currentTime++;
        exiting = indexAfter(states, EXIT, exiting);
    }
} 

function indexAfter(array, target, after = -1) {
    for (let i = after + 1; i < array.length; i++) {
        if (array[i] === target) return i;
    }

    return array.length;
}

function main() {
    console.log(timeTaken(
        [0,1,1,2,4],
        [0,1,0,0,1]
    ));
    console.log(timeTaken(
        [0,0,0],
        [1,0,1]
    ));
}

main();