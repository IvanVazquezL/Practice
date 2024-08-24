class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new Node("dummyHead", 0);
        this.tail = new Node("dummyTail", 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /** 
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) return -1;

        const node = this.map.get(key);
        this.remove(node);
        this.add(node);

        return node.value;
    }

    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.get(key)) {
            const node = this.map.get(key);
            this.remove(node);
        }

        const newNode = new Node(key, value);
        this.map.set(key, newNode);
        this.add(newNode);

        if (this.map.size > this.capacity) {
            const nodeToDelete = this.head.next;
            this.remove(nodeToDelete);
            this.map.delete(nodeToDelete.key);
        }
    }

    /** 
     * @param {Node} node 
     * @return {void}
     */
    add(node) {
        const previousEnd = this.tail.prev;
        previousEnd.next = node;
        node.prev = previousEnd;
        node.next = this.tail;
        this.tail.prev = node;
    }

    /** 
     * @param {Node} node 
     * @return {void}
     */
    remove(node) {
        const nextNode = node.next;
        const prevNode = node.prev;
        nextNode.prev = prevNode;
        prevNode.next = nextNode;
    }

}

function main() {
    processLRUCache(
        ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"],
        [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
    );
}

function processLRUCache(methods, inputs) {
    const lRUCache = new LRUCache(inputs[0][0]);

    for (let i = 1; i < methods.length; i++) {
        switch (methods[i]) {
            case "get":
                /*console.log({
                    method: "get",
                    inputs: inputs[i]
                })*/
                console.log(lRUCache.get(inputs[i][0]));
                break;
            case "put":
                /*console.log({
                    method: "put",
                    inputs: inputs[i]
                })*/
                console.log(lRUCache.put(inputs[i][0], inputs[i][1]));
                break;
            default:
                break;
        }
    }
}

main();