const successor = node => {
    if (!node) {
        throw new Error('node cant be null');
    }

    let successorNode;
    if (node.right) {
        successorNode = node.right;
        while (successorNode.left) {
            successorNode = successorNode.left;
        }
        return successorNode.value;
    } else {
        successorNode = node;
        while (successorNode.parent && successorNode !== successorNode.parent.left) {
            successorNode = successorNode.parent;
        }
        return successorNode.parent ? successorNode.parent.val : undefined;
    }
}