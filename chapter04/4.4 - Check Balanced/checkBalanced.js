const getHeight = root => {
    if (root === null) return -1;
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

const isBalanced = root => {
    if (root === null) return true;

    let heightDiff = getHeight(root.left) - getHeight(root.right);
    if (Math.abs(heightDiff) > 1) {
        return false;
    } else {
        return isBalanced(root.left) && isBalanced(root.right);
    }
}

const betterCheckHeight = root => {
    if (root === null) return -1;

    let leftHeight = betterCheckHeight(root.left);
    if (leftHeight === Number.NEGATIVE_INFINITY) return Number.NEGATIVE_INFINITY;

    let rightHeight = betterCheckHeight(root.right);
    if (rightHeight === Number.NEGATIVE_INFINITY) return Number.NEGATIVE_INFINITY;

    let heightDiff = leftHeight - rightHeight;
    if (Math.abs(heightDiff) > 1) {
        return Number.NEGATIVE_INFINITY;
    } else {
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

const betterIsBalanced = root => {
    return betterCheckHeight(root) !== Number.NEGATIVE_INFINITY;
}