// Describe how to use a single array to implement three stacks

// Fixed size.  
class TripleStackFixed {
    constructor() {
        this._array = [];
        this._lengths = [0,0,0];
    }

    _getLength(stack) {
        return this._lengths[stack - 1];
    }

    push(stack, value) {
        let idx = this._getLength(stack) * 3 + stack - 1;
        this._array[idx] = value;
        ++this._lengths[stack - 1];
    }

    pop(stack) {
        let length = this._getLength(stack), value;
        if (length > 0) {
            let idx = (length - 1) * 3 + stack - 1;
            value = this._array[idx];
            this._array[idx] = undefined;
            --this._lengths[stack - 1];
        }
        return value;
    }

    peek(stack) {
        let length = this._getLength(stack), value;
        if (length > 0) {
            let idx = (length - 1) * 3 + stack - 1;
            value = this._array[idx];
        }
        return value;
    }

    isEmpty(stack) {
        return this._getLength(stack) === 0;
    }
}

// Dynamic Size
class TripleStackDynamic {
    constructor() {
        this.container = [];
        this.middleBottom = 0;
        this.middleTop = 0;
    }

    push1(val) {
        this.container.unshift(val);
        this.middleBottom++;
        this.middleTop++;
    }

    push2(val) {
        this.container.splice(this.middleTop, 0, val);
        this.middleTop++;
    }

    push3(val) {
        this.container.push(val);
    }

    pop1() {
        if (this.isEmpty1()) {
            return undefined;
        }
        let popped = this.container.shift();
        if (this.middleBottom > 0) {
            this.middleBottom--;
            this.middleTop--;
        }
        return popped;
    }

    pop2() {
        if (this.isEmpty2()) {
            return undefined;
        }
        let popped = this.container[this.middleTop - 1];
        this.container.splice(this.middleTop - 1, 1);
        if (this.middleBottom < this.middleTop) {
            this.middleTop--;
        }
        return popped;
    }

    pop3() {
        if (this.isEmpty3()) {
            return undefined;
        }

        return this.container.pop();
    }

    peek1() {
        return this.isEmpty1() ? undefined : this.container[0];
    }

    peek2() {
        return this.isEmpty2() ? undefined : this.container[this.middleTop - 1];
    }

    peek3() {
        return this.isEmpty3() ? undefined : this.container[this.container.length - 1];
    }

    isEmpty1() {
        return this.middleBottom === 0;
    }

    isEmpty2() {
        return this.middleBottom === this.middleTop;
    }

    isEmpty3() {
        return this.middleTop === this.container.length;
    }
}