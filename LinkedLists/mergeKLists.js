class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

var mergeKLists = function(lists) {
    const amount = lists.length;
    let interval = 1;

    while (interval < amount) {
        for (let i = 0; i < amount - interval; i += interval * 2) {
            lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
        }

        interval *= 2;
    }
    
    return amount > 0 ? lists[0] : null;
};

function mergeTwoLists(l1, l2) {
    const dummyHead = new ListNode(0);
    let point = dummyHead;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            point.next = l1;
            l1 = l1.next;
        } else {
            point.next = l2;
            l2 = l2.next;
        }
        point = point.next;
    }

    if (!l1) {
        point.next = l2;
    } else {
        point.next = l1;
    }

    return dummyHead.next;
}

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
    const l1Node2 = new ListNode(4);
    const l1Node3 = new ListNode(5);
    l1Node1.next = l1Node2;
    l1Node2.next = l1Node3;

    const l2Node1 = new ListNode(1);
    const l2Node2 = new ListNode(3);
    const l2Node3 = new ListNode(4);
    l2Node1.next = l2Node2;
    l2Node2.next = l2Node3;

    const l3Node1 = new ListNode(2);
    const l3Node2 = new ListNode(6);
    l2Node1.next = l2Node2;

    const lists = [l1Node1, l2Node1, l3Node1];

    print(mergeKLists(lists));
}

main();