export class Stack {
    constructor() {
        this._stack = [];
    }

    pop() {
        return this._stack.pop();
    }

    push(val) {
        this._stack.push(val);
    }

    peek() {
        return this._stack[this._stack.length - 1];
    }

    isEmpty() {
        return this._stack.length === 0;
    }

    size() {
        return this._stack.length;
    }
}