class Node {
    constructor(val, next) {
        this.val = val;
        this.next = null;
    }
}

const findBeginning = head => {
    let slow = Node(head, head.next);
    let fast = Node(head, head.next);

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            break;
        }
    }

    if (fast === null || fast.next === null) {
        return null;
    }

    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}