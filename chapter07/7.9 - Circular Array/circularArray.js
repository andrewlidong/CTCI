class CircularArray {
    constructor() {
        this.array = [];
        this.front = null;
        this.back = null;
    }

    rotate() {
        if (this.array.length > 0) {
            this.front = (this.front + 1) % this.array.length;
            this.back = (this.back + 1) % this.array.length;
        }
    }

    push(val) {
        if (this.array.length === 0) {
            this.array.push(val);
            this.array.front = 0;
            this.array.back = 0;
        } else if (this.front <= this.back) {
            this.array.push(val);
            this.back++;
        } else {
            this.array = thisarray.slice(0, this.back + 1).concat([val]).concat(this.array.slice(this.front));
            this.back++;
        }
    }

    pop() {
        if (this.array.length === 0) {
            return;
        } else if (this.front <= this.back) {
            let answer = this.array.pop();
            this.back--;
        } else {
            let answer = this.array[this.back];
            this.array = this.array.slice(0, this.back).concat(this.array.slice(this.front));
            this.back--;
            return answer;
        }
    }
}