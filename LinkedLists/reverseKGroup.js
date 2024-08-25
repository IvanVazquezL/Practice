class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseLinkedList(head, k) {
    let prev = null;
    let curr = head;

    while (k > 0 && curr) {
        const nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
        k--;
    }

    return prev;
}

var reverseKGroup = function(head, k) {
    let count = 0;
    let curr = head;

    // First pass to check if there are at least k nodes left to reverse
    while (count < k && curr) {
        curr = curr.next;
        count++;
    }

    console.log({
        curr,
        count
    })

    if (count === k) {
        // Reverse the first k nodes
        const reversedHead = reverseLinkedList(head, k);
        // Recursively reverse the next group and connect the current reversed part to it
        head.next = reverseKGroup(curr, k);
        return reversedHead;
    }

    // If there are less than k nodes left, return the head as is
    return head;
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
    const l1Node1 = new ListNode(1);
    const l1Node2 = new ListNode(2);
    const l1Node3 = new ListNode(3);
    const l1Node4 = new ListNode(4);
    const l1Node5 = new ListNode(5);
    l1Node1.next = l1Node2;
    l1Node2.next = l1Node3;
    l1Node3.next = l1Node4;
    l1Node4.next = l1Node5;

    const l2Node1 = new ListNode(1);
    const l2Node2 = new ListNode(2);
    const l2Node3 = new ListNode(3);
    const l2Node4 = new ListNode(4);
    const l2Node5 = new ListNode(5);
    l2Node1.next = l2Node2;
    l2Node2.next = l2Node3;
    l2Node3.next = l2Node4;
    l2Node4.next = l2Node5;

    print(l1Node1);
    print(reverseKGroup(l1Node1, 2));
    console.log('')
   /* print(l2Node1);
    print(reverseKGroup(l2Node1, 3));*/
}

main();