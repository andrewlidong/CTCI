export class Queue {
    constructor() {
        this.queue = [];
    }

    add(val) {
        this.queue.unshift(val);
    }

    remove() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0]
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}