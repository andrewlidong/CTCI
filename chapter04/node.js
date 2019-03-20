class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = TreeNode(null);
        this.right = TreeNode(null);
    }
}

class GraphNode {
    constructor(val) {
        this.val = val;
        this.children = GraphNode(null);
    }
}