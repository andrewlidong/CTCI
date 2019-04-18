class Node {
    constructor(value, parent=null) {
        this.left = this.right = null;
        this.parent = parent;
        this.val = value;
        this.size = 1;
    }
}

class RandomBinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let node = this, branch = 'root';
        while (node[branch]) {
            node = node[branch];
            node.size++;
            branch = value < node.val ? 'left' : 'right';
        }
        node[branch] = new Node(value, node);
    }

    delete(value) {
        return this._deleteRecursive(this.root, 'root', value);
    }

    _deleteRecursive(node, parentBranch, value) {
        if (node) {
            if (node.val === value) {
                if (!node.left && !node.right) {
                    node.parent[parentBranch] = null;
                    return true;
                } else if (node.left && !node.right) {
                    node.parent[parentBranch] = node.left;
                    return true;
                } else if (!node.left && node.right) {
                    node.parent[parentBranch] = node.right;
                    return true;
                } else {
                    let minNode = node.right;
                    while (minNode.left) {
                        minNode = minNode.left;
                    }
                    node.val = minNode.val;
                    --node.size;
                    return this._deleteRecursive(node.right, 'right', minNode.val);
                }
            } else {
                let branch = value < node.val ? 'left' : 'right';
                if (this._deleteRecursive(node[branch], branch, value)) {
                    --node.size;
                    return true;
                }
            }
        }
        return false;
    }

    find(value) {
        let node = this.root, branch;
        while (node) {
            if (node.val === value) {
                return node;
            }
            branch = value < node.val ? 'left' : 'right';
            node = node[branch];
        }
        return undefined;
    }

    randomNode() {
        if (!this.root) {
            return undefined;
        }

        let idx = Math.ceil(Math.random() * this.root.size);
        let node = this.root;
        while (idx > 0) {
            if (node.left) {
                if (idx === node.left.size + 1) {
                    return node;
                } else if (idx <= node.left.size) {
                    node = node.left;
                } else if (node.right) {
                    idx -= node.left.size + 1;
                    node = node.right;
                }
            } else {
                if (idx <= 1) {
                    return node;
                } else if (node.right) {
                    idx--;
                    node = node.right;
                }
            }
        }

        throw new Error ('We should never reach this code');
    }
}