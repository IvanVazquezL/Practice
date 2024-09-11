function criticalConnections(numberOfServers, connections) {
    const neighborMap = new Map();
    const discoveryTimeMap = new Map();
    const lowestReachableMap = new Map();
    const criticalConnections = [];
    const discoveryTimeCounter = { value: 0 };

    mapServersToNeighbors(numberOfServers, neighborMap, connections);

    depthFirstSearch(0, -1, neighborMap, discoveryTimeMap, lowestReachableMap, criticalConnections, discoveryTimeCounter);

    return criticalConnections;
}

function depthFirstSearch(server, parent, neighborMap, discoveryTimeMap, lowestReachableMap, criticalConnections, discoveryTimeCounter) {
    initializeDiscoveryTime(server, discoveryTimeMap, lowestReachableMap, discoveryTimeCounter);

    for (const neighbor of neighborMap.get(server)) {
        if (neighbor === parent) continue;

        if (isNeighborUnvisited(neighbor, discoveryTimeMap)) {
            depthFirstSearch(neighbor, server, neighborMap, discoveryTimeMap, lowestReachableMap, criticalConnections, discoveryTimeCounter);
            updateLowestReachableTime(server, neighbor, lowestReachableMap);

            if (isCriticalConnection(server, neighbor, lowestReachableMap, discoveryTimeMap)) {
                criticalConnections.push([server, neighbor]);
            }
        } else {
            updateLowTimeForAncestor(server, neighbor, lowestReachableMap, discoveryTimeMap);
        }
    }
}

function isCriticalConnection(server, neighbor, lowestReachableMap, discoveryTimeMap) {
    return lowestReachableMap.get(neighbor) > discoveryTimeMap.get(server);
}

function updateLowestReachableTime(server, neighbor, lowestReachableMap) {
    const serverLowTime = lowestReachableMap.get(server);
    const neighborLowTime = lowestReachableMap.get(neighbor);
    lowestReachableMap.set(server, Math.min(serverLowTime, neighborLowTime));
}

function updateLowTimeForAncestor(server, neighbor, lowestReachableMap, discoveryTimeMap) {
    const serverLowTime = lowestReachableMap.get(server);
    const neighborDiscoveryTime = discoveryTimeMap.get(neighbor);
    lowestReachableMap.set(server, Math.min(serverLowTime, neighborDiscoveryTime));
}

function isNeighborUnvisited(neighbor, discoveryTimeMap) {
    return !discoveryTimeMap.has(neighbor);
}

function initializeDiscoveryTime(server, discoveryTimeMap, lowestReachableMap, discoveryTimeCounter) {
    const discoveryTime = discoveryTimeCounter.value;
    discoveryTimeMap.set(server, discoveryTime);
    lowestReachableMap.set(server, discoveryTime);
    discoveryTimeCounter.value++;
}

function mapServersToNeighbors(numberOfServers, neighborMap, connections) {
    for (let server = 0; server < numberOfServers; server++) {
        neighborMap.set(server, []);
    }

    for (const [server1, server2] of connections) {
        neighborMap.get(server1).push(server2);
        neighborMap.get(server2).push(server1);
    }
}

function main() {
    console.log(criticalConnections(4, [[0,1],[1,2],[2,0],[1,3]]));
    //console.log(criticalConnections(2, [[0,1]]));
}

main();