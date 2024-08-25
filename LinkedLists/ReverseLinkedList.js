class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

var reverseList = function(head) {
    let prev = null;
    let curr = head;
    
    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    
    return prev;
};

function reverseListRec(curr, prev) {
    if (!curr) {
        return prev;
    }

    const nextNode = curr.next;
    curr.next = prev;

    return reverseListRec(nextNode, curr);
}

function main() {
    const l1Node1 = new ListNode(3);
    const l1Node2 = new ListNode(4);
    const l1Node3 = new ListNode(2);
    l1Node1.next = l1Node2;
    l1Node2.next = l1Node3;

    console.log(reverseList(l1Node1));

    const l2Node1 = new ListNode(4);
    const l2Node2 = new ListNode(6);
    const l2Node3 = new ListNode(5);
    l2Node1.next = l2Node2;
    l2Node2.next = l2Node3;

    console.log(reverseListRec(l2Node1, null));
}

main();