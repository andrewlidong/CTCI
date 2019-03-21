const checkSubtree = (tree1, tree2) => {
    if (!tree1 || !tree1.root) {
        throw new Error('tree1 must be a valid non-empty tree');
    }
    if (!tree2 || !tree2.root) {
        return true;
    }

    return findRoot(tree1.root, tree2.root);
}

const findRoot = (node1, node2) => {
    if (!node1 || !node2) {
        return false;
    } else if (node1.val === node2.val && sameTree(node1, node2)) {
        return true;
    } else {
        return findRoot(node1.left, node2) || findRoot(node1.right, node2);
    }
}

const sameTree = (node1, node2) => {
    if (!node1 && !node2) {
        return true;
    } else if (!node1 && node2 || node1 && !node2) {
        return false;
    } else if (node1.val === node2.val) {
        return sameTree(node1.left, node2.left) && sameTree(node2.right, node2.right);
    } else {
        return false;
    }
}