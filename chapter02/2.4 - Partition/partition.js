// Write code to partition a linked list around a value x such that all nodes less than x come before all nodes greater than or equal to x.  

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const partition = (head, x) => {
    let smaller = Node(null);
    let smallerDummy = Node(null);
    smallerDummy.next = smaller;
    let bigger = Node(null);
    let biggerDummy = Node(null);
    biggerDummy.next = bigger;
    let current = head;
    let currentDummy = Node(null)
    currentDummy.next = head;

    while (current !== null) {
        if (current.val < x) {
            if (smaller.val) {
                smaller.next = Node(current.val);
                smaller = smaller.next;
            } else {
                smaller.val = current.val;
            }
        } else if (current.val >= x) {
            if (bigger.val) {
                bigger.next = Node(current.val);
                bigger = bigger.next;
            } else {
                bigger.val = current.val;
            }
        }
    }
    smaller.next = biggerDummy.next;
    return smallerDummy.next;
}