var Stack = require('../stack')

class StackQueue {
    constructor() {
        this._newStack = new Stack();
        this._oldStack = new Stack();
    }

    size() {
        return this._newStack.size() + this._oldStack.size();
    }

    enqueue(val) {
        this._newStack.push(val);
    }

    _shiftStacks() {
        if (this._oldStack.isEmpty()) {
            while (!this._newStack.isEmpty()) {
                this._oldStack.push(this._newStack.pop());
            }
        }
    }

    peek() {
        this._shiftStacks();
        return this._oldStack.peek();
    }

    dequeue() {
        this._shiftStacks();
        return this._oldStack.pop();
    }
}