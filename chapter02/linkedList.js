class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

deleteNode = (node) => {
    if (node === null) return null;
    
    node.prev.next = node.next;
    node.next.prev = node.prev;
}