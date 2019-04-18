function findPathWithSum(tree, value) {
    if (!tree || !tree.root) {
        throw new Error ('tree must be valid and non-empty');
    }

    return findPathWithSumRecurse([], tree.root, value);
}

function findPathWithSumRecurse(path, node, value) {
    let count = 0;
    if (node) {
        path.push(node.val);
        let sum = 0;
        for (let i = path.length - 1; i >= 0; i--) {
            sum += path[i];
            if (sum === value) {
                count++;
            }
        }
        count += findPathWithSumRecurse(path, node.left, value) + findPathWithSumRecurse(path, node.right, value);
        path.pop();
    }
    return count;
}