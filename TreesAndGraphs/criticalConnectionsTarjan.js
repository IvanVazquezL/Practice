var criticalConnections = function(n, connections) {
    const adjacencyList  = new Array(n).fill(0).map(() => []);
    
    linkServersToNeighbors(adjacencyList, connections)
    
    const discoveryTimes = new Array(n).fill(-1);
    const lowestDiscoveryTimes = new Array(n).fill(-1);
    const visitedNodes = new Array(n).fill(false);
    const result = [];

    let time = 0;

    for (let i = 0; i < n; i++) {
        if (!visitedNodes[i]) {
            depthFirstSearch(
                i,
                -1,
                adjacencyList,
                discoveryTimes,
                lowestDiscoveryTimes,
                visitedNodes,
                result,
                time
            );
        }
    }

    return result;
};

function depthFirstSearch(node, parent, adjacencyList, discoveryTimes, lowestDiscoveryTimes, visitedNodes, result, time) {
    visitedNodes[node] = true;
    discoveryTimes[node] = lowestDiscoveryTimes[node] = time++;

    for (const neighbor of adjacencyList[node]) {
        if (neighbor === parent) continue;

        if (!visitedNodes[neighbor]) {
            depthFirstSearch(
                neighbor,
                node,
                adjacencyList,
                discoveryTimes,
                lowestDiscoveryTimes,
                visitedNodes,
                result,
                time
            );

            lowestDiscoveryTimes[node] = Math.min(lowestDiscoveryTimes[node], lowestDiscoveryTimes[neighbor]);

            if (lowestDiscoveryTimes[neighbor] > discoveryTimes[node]) {
                result.push([node, neighbor]);
            }
        } else {
            lowestDiscoveryTimes[node] = Math.min(lowestDiscoveryTimes[node], discoveryTimes[neighbor]);
        }
    }
}

function linkServersToNeighbors(adjacencyList, connections) {
    //  each index in the adjacency list represents a node, 
    //  and the array at that index contains the nodes (neighbors) 
    //  directly connected to it.
    for (const [server1, server2] of connections) {
        adjacencyList[server1].push(server2);
        adjacencyList[server2].push(server1);
    }
}

function main() {
    console.log(criticalConnections(4, [[0,1],[1,2],[2,0],[1,3]]));
    //console.log(criticalConnections(2, [[0,1]]));
}

main();