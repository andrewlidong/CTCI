export class Stack {
    constructor() {
        this.stack = [];
    }

    pop() {
        return this.stack.pop();
    }

    push(val) {
        this.stack.push(val);
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}