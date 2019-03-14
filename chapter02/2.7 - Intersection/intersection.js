class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Result {
    constructor(tail, size) {
        this.tail = tail;
        this.size = size;
    }
}

const getTailAndSize = node => {
    if (node === null) return null;

    let size = 1;
    let current = Node(node);
    while (current.next !== null) {
        size++;
        current = current.next;
    }
    return new Result(current, size);
}

const getKthNode = (head, k) => {
    let current = Node(head);
    while (k > 0 && current !== null) {
        current = current.next;
        k--;
    }
    return current;
}

const findIntersection = (L1, L2) => {
    if (l1 === null || L2 === null) return null;

    let result1 = Result(getTailAndSize(L1));
    let result2 = Result(getTailAndSize(L2));

    if (result1.tail !== result2.tail) {
        return null;
    }

    let shorter = Node(result1.size < result2.size ? L1 : L2);
    let longer = Node(result1.size < result2.size ? L2 : L1);

    longer = getKthNode(longer, Math.abs(result1.size - result2.size));

    while (shorter !== longer) {
        shorter = shorter.next;
        longer = longer.next;
    }

    return shorter;
}