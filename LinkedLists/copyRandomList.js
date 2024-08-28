class _Node {
    constructor(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
};

var copyRandomList = function(head) {
    if (head === null) return null;

    const visited = new Map();

    let nodeToCopy = head;
    let copyNode = new _Node(nodeToCopy.val);
    visited.set(nodeToCopy, copyNode);

    while (nodeToCopy) {
        copyNode.random = getClonedNode(nodeToCopy.random)
        copyNode.next = getClonedNode(nodeToCopy.next);

        nodeToCopy = nodeToCopy.next;
        copyNode = copyNode.next;
    }

    return visited.get(head);

    function getClonedNode(node) {
        if (node) {
            if (visited.has(node)) {
                return visited.get(node);
            } else {
                const newNode = new _Node(
                    node.val,
                    null,
                    null
                );
                visited.set(node, newNode);
                return newNode;
            }
        }
        return null;
    }
};

function print(head) {
    let dummy = head;

    while (dummy.next) {
        process.stdout.write(`${dummy.val} -> `);
        dummy = dummy.next;
    }
    
    console.log(dummy.val);
}

function main() {
    const l1Node1 = new _Node(7);
    const l1Node2 = new _Node(13);
    const l1Node3 = new _Node(11);
    const l1Node4 = new _Node(10);
    const l1Node5 = new _Node(1);
    l1Node1.next = l1Node2;
    l1Node2.next = l1Node3;
    l1Node3.next = l1Node4;
    l1Node4.next = l1Node5;
    l1Node1.random = null;
    l1Node2.random = l1Node1;
    l1Node3.random = l1Node5;
    l1Node4.random = l1Node3;
    l1Node5.random = l1Node1;

    print(copyRandomList(l1Node1));
}

main();