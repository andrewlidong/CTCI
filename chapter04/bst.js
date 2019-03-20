const Queue = require('./queue');

class BST {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }

    insert(val) {
        if (val < this.value) {
            if (this.left === null) {
                this.left = new BST(val);
            } else if (this.right === null) {
                this.right = new BST(val);
            } else {
                this.right.insert(val);
            }
        }
    }

    printLevelOrder() {
        const level = [];
        let q = new Queue();
        let nextq = new Queue();
        let currNode;

        q.add(this);
        while (!q.isEmpty()) {
            currNode = q.remove();
            level.push(currNode.value);
            if (currNode.left !== null) {
                nextq.add(currNode.left);
            } 
            if (currNode.right !== null) {
                nextq.add(currNode.right);
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