let Queue = require('./Queue');

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
    }

    printLevelOrder() {
        let level = [];
        let q = new Queue();
        let nextQ = new Queue();
        let currNode;

        q.add(this);
        while (!q.isEmpty()) {
            currNode = q.remove();
            level.push(currNode.value);
            if (currNode.left !== null) {
                nextQ.add(currNode.left);
            }
            if (currNode.right !== null) {
                nextQ.add(currNode.right);
            }
            if (q.isEmpty()) {
                console.log(level.join(','));
                level = [];
                q = nextq;
                nextq = new Queue();
            }
        }
    }
}

module.exports = BST;