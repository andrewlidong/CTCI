// How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element ?  

// Embed the current min in every push
class MinStackBig {
    constructor() {
        this._stack = [];
    }

    isEmpty() {
        return this._stack.length === 0;
    }
    
    min() {
        if (!this.isEmpty()) {
            let item = this._stack[this._stack.length  - 1];
            return item.min;
        }
    }

    peek() {
        if (!this.isEmpty()) {
            let item = this._stack[this._stack.length - 1];
            return item.value;
        }
    }
    
    push(val) {
        let min = this.min();
        this._stack.push({
            value: val,
            min: Math.min(min !== undefined ? min : Number.POSITIVE_INFINITY, val)
        });
    }

    pop() {
        if (!this.isEmpty()) {
            let item = this._stack.pop();
            return item.value;
        }
    }
}

var Stack = require('../stack')

// Store a separate min stack
class MinStackSmall {
    constructor() {
        this._stack = new Stack();
        this._minStack = new Stack();
        this._currMin = undefined;
    }

    push(val) {
        if (this._currMin === undefined || val <= this._currMin) {
            this._minStack.push(this._currMin);
            this._currMin = val;
        }
        this._stack.push(val);
    }

    pop() {
        let popped = this._stack.pop();
        if (popped === this._currMin) {
            this._currMin = this._minStack.pop();
        }
        return popped;
    }

    peek() {
        return this._stack.peek();
    }

    isEmpty() {
        return this._stack.isEmpty();
    }

    min() {
        return this._currMin;
    }
}