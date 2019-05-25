const LinkedList = require('./linkedList');

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        let node = new LinkedList(value);
        node.next = this.top;
        this.top = node;
    }

    pop() {
        let popped = this.top;
        if (this.top !== null) {
            this.top = this.top.next;
        }
        return popped.value;
    }

    peek() {
        return this.top !== null ? this.top.value : null;
    }

    isEmpty() {
        return this.top === null;
    }
}

module.exports = Stack;