const inOrderTraversal = node => {
    if (node) {
        inOrderTraversal(node.left);
        visit(node);
        inOrderTraversal(node.right);
    }
}