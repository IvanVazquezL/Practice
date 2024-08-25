class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

var addTwoNumbers = function(l1, l2) {
    const reversedL1 = reverseLinkedList(l1);
    const reversedL2 = reverseLinkedList(l2);

    let currentNodeL1 = reversedL1;
    let currentNodeL2 = reversedL2;
    let dummyHead = new ListNode(0);
    let currentNodeAnswer = dummyHead;
    let carry = 0;
    
    while (currentNodeL1 || currentNodeL2 || carry !== 0) {
        const numberL1 = currentNodeL1?.val || 0;
        const numberL2 = currentNodeL2?.val || 0;
        const sum = numberL1 + numberL2 + carry;
        carry = Math.floor(sum / 10);
        const digit = sum % 10;

        const newNode = new ListNode(digit);

        currentNodeAnswer.next = newNode;
        currentNodeAnswer = newNode;

        currentNodeL1 = currentNodeL1?.next;
        currentNodeL2 = currentNodeL2?.next
    }

    return reverseLinkedList(dummyHead.next);
};

function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}

function main() {
    const l1Node1 = new ListNode(3);
    const l1Node2 = new ListNode(4);
    const l1Node3 = new ListNode(2);
    l1Node1.next = l1Node2;
    l1Node2.next = l1Node3;

    const l2Node1 = new ListNode(4);
    const l2Node2 = new ListNode(6);
    const l2Node3 = new ListNode(5);
    l2Node1.next = l2Node2;
    l2Node2.next = l2Node3;

    console.log(addTwoNumbers(l1Node1, l2Node1));
}

main();