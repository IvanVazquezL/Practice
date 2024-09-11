const names = {
    0: "Alice",
    1: "Bob",
    2: "Charlie",
    3: "Dave",
}

function criticalConnections(numberOfServers, connections) {
    const neighborMap = new Map();
    const discoveryTimeMap = new Map();
    const lowestReachableTimeMap = new Map();
    const criticalConnections = [];
    const discoveryTimeCounter = { value: 0 }; // Mutable object to keep track of time

    mapServersToNeighbors(numberOfServers, connections, neighborMap);

    depthFirstSearch(0, -1, neighborMap, discoveryTimeMap, lowestReachableTimeMap, criticalConnections, discoveryTimeCounter);

    return criticalConnections;
}

function mapServersToNeighbors(numberOfServers, connections, neighborMap) {
    for (let server = 0; server < numberOfServers; server++) {
        neighborMap.set(server, []);
    }

    for (const [server1, server2] of connections) {
        neighborMap.get(server1).push(server2);
        neighborMap.get(server2).push(server1);
    }
}

function depthFirstSearch(server, parent, neighborMap, discoveryTimeMap, lowestReachableTimeMap, criticalConnections, discoveryTimeCounter) {
    initializeDiscoveryTime(server, discoveryTimeMap, lowestReachableTimeMap, discoveryTimeCounter);

    console.log(`${names[server]}'s parent is ${names[parent] ?? "no one"}, discovery: ${discoveryTimeMap.get(server)} and lowest: ${lowestReachableTimeMap.get(server)} and neighbors: ${neighborMap.get(server).map(m => names[m])}`)
    for (const neighbor of neighborMap.get(server)) {
        if (neighbor === parent) {
            console.log(`${names[neighbor]} is the parent of ${names[server]} so we skip`)
            continue;
        }
        if (isNeighborUnvisited(neighbor, discoveryTimeMap)) {
            console.log(`${names[neighbor]} is unvisited and goes to dfs`)
            depthFirstSearch(neighbor, server, neighborMap, discoveryTimeMap, lowestReachableTimeMap, criticalConnections, discoveryTimeCounter);
            console.log(`${names[neighbor]} returns from dfs`)
            updateLowestReachableTime(server, neighbor, lowestReachableTimeMap);
        
            if (isCriticalConnection(server, neighbor, lowestReachableTimeMap, discoveryTimeMap)) {
                console.log(`${names[neighbor]} has a critical connection with ${names[server]}`)
                criticalConnections.push([server, neighbor]);
            }

        } else {
            updateLowTimeForAncestor(server, neighbor, lowestReachableTimeMap, discoveryTimeMap);
        }
    }
}

function initializeDiscoveryTime(server, discoveryTimeMap, lowestReachableTimeMap, discoveryTimeCounter) {
    const discoveryTime = discoveryTimeCounter.value;
    discoveryTimeMap.set(server, discoveryTime);
    lowestReachableTimeMap.set(server, discoveryTime);
    discoveryTimeCounter.value++;
    /*console.log({
        discoveryTimeMap,
        lowestReachableTimeMap
    })*/
}

function isNeighborUnvisited(neighbor, discoveryTimeMap) {
    return !discoveryTimeMap.has(neighbor);
}

function updateLowestReachableTime(server, neighbor, lowestReachableTimeMap) {
    // Check if the subtree rooted at neighbor has a connection back to one of the ancestors
    const serverLowTime = lowestReachableTimeMap.get(server);
    const neighborLowTime = lowestReachableTimeMap.get(neighbor);
    lowestReachableTimeMap.set(server, Math.min(serverLowTime, neighborLowTime));
    console.log(`${names[neighbor]} lowest: ${neighborLowTime} is neighbor of ${names[server]} lowest: ${serverLowTime}, ${names[server]} updates to ${lowestReachableTimeMap.get(server)}`)
}

function isCriticalConnection(server, neighbor, lowestReachableTimeMap, discoveryTimeMap) {
    // If the lowest reachable node from neighbor is greater than the discovery time of node
    return lowestReachableTimeMap.get(neighbor) > discoveryTimeMap.get(server);
}

function updateLowTimeForAncestor(server, neighbor, lowestReachableTimeMap, discoveryTimeMap) {
    // Update low value if an ancestor is found
    const serverLowTime = lowestReachableTimeMap.get(server);
    const neighborDiscoveryTime = discoveryTimeMap.get(neighbor);
    lowestReachableTimeMap.set(server, Math.min(serverLowTime, neighborDiscoveryTime));
    console.log(`${names[neighbor]} discovery: ${neighborDiscoveryTime} is an ancestor of ${names[server]} lowest: ${serverLowTime}, update ${names[server]}'s lowest: ${lowestReachableTimeMap.get(server)}`);
}

function main() {
    /*console.log(`
Alice's parent is no one, discovery: 0 and lowest: 0 and neighbors: Bob,Charlie
    Bob is unvisited and goes to dfs
        Bob's parent is Alice, discovery: 1 and lowest: 1 and neighbors: Alice,Charlie,Dave
            Alice is the parent of Bob so we skip
            Charlie is unvisited and goes to dfs
                Charlie's parent is Bob, discovery: 2 and lowest: 2 and neighbors: Bob,Alice
                    Bob is the parent of Charlie so we skip
                    Alice discovery: 0 is an ancestor of Charlie lowest: 2, update Charlie's lowest: 0
            Charlie returns from dfs
Charlie lowest: 0 is neighbor of Bob lowest: 1, Bob updates to 0
Dave is unvisited and goes to dfs
Dave's parent is Bob, discovery: 3 and lowest: 3 and neighbors: Bob
Bob is the parent of Dave so we skip
Dave returns from dfs
Dave lowest: 3 is neighbor of Bob lowest: 0, Bob updates to 0
Dave has a critical connection with Bob
Bob returns from dfs
Bob lowest: 0 is neighbor of Alice lowest: 0, Alice updates to 0
Charlie discovery: 2 is an ancestor of Alice lowest: 0, update Alice's lowest: 0`)
*/
    console.log(criticalConnections(4, [[0,1],[1,2],[2,0],[1,3]]));
    console.log(criticalConnections(2, [[0,1]]));
}

main();