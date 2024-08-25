class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

var mergeTwoLists = function(list1, list2) {
    let currentNodeL1 = list1;
    let currentNodeL2 = list2;
    let dummyHead = new ListNode(0);
    let currentNodeAnswer = dummyHead;

    while (currentNodeL1 && currentNodeL2) {
        const value1 = currentNodeL1?.val;
        const value2 = currentNodeL2?.val;

        if (value1 < value2) {
            currentNodeAnswer.next = currentNodeL1;
            currentNodeAnswer = currentNodeL1;
            currentNodeL1 = currentNodeL1?.next;
        } else {
            currentNodeAnswer.next = currentNodeL2;
            currentNodeAnswer = currentNodeL2;
            currentNodeL2 = currentNodeL2?.next;
        }
    }

    if (currentNodeL1) {
        currentNodeAnswer.next = currentNodeL1;
    } else {
        currentNodeAnswer.next = currentNodeL2;
    }

    return dummyHead.next;
};

function print(head) {
    let curr = head;

    while (curr) {
        console.log(curr.val);
        curr = curr.next;
    }
}

function main() {
    const l1Node1 = new ListNode(1);
    const l1Node2 = new ListNode(2);
    const l1Node3 = new ListNode(4);
    l1Node1.next = l1Node2;
    l1Node2.next = l1Node3;

    const l2Node1 = new ListNode(1);
    const l2Node2 = new ListNode(3);
    const l2Node3 = new ListNode(4);
    l2Node1.next = l2Node2;
    l2Node2.next = l2Node3;

    print(mergeTwoLists(l1Node1, l2Node1));
}

main();