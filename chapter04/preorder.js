const preOrderTraversal = node => {
    if (node) {
        visit(node);
        preOrderTraversal(node.left);
        preOrderTraversal(node.right);
    }
}