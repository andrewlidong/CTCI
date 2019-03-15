class SetOfStacks {
    constructor(capacity) {
        if (arguments.length < 1) {
            throw new Error('Max capacity is required');
        }
        this._stacks = [[]];
        this._capacity = capacity;
    }

    push(val) {
        if (this._stacks[this._stacks.length - 1].length >= this._capacity) {
            this._stacks.push([]);
        }
        this._stacks[this._stacks.length - 1].push(val);
    }

    pop() {
        let popped = this._stacks[this._stacks.length - 1].pop();
        if (this._stacks.length > 1 && this._stacks[this._stacks.length - 1].length === 0) {
            this._stacks.pop();
        }
        return popped;
    }

    popAt(subStackIdx) {
        if (subStackIdx < 1 || subStackIdx > this._stacks.length) {
            throw new Error('Invalid Sub Stack Index');
        }

        if (subStackIdx === this._stacks.length) {
            return this.pop();
        }

        let stack = this._stacks[subStackIdx - 1];
        let popped = stack.pop();
        let tempStack = [];
        let nextStack;

        if (subStackIdx < this._stacks.length) {
            for (let i = subStackIdx; i < this._stacks.length; i++) {
                nextStack = this._stacks[i];
                while (nextStack.length > 0) {
                    tempStack.push(nextStack.pop());
                }
                stack = nextStack;
            }
        }

        if (this._stacks.length > 1 && this._stacks[this._stacks.length - 1].length === 0) {
            this._stacks.pop();
        }

        return popped;
    }
}