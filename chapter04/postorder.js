const postOrderTraversal = node => {
    if (node) {
        postOrderTraversal(node.left);
        postOrderTraversal(node.right);
        visit(node);
    }
}