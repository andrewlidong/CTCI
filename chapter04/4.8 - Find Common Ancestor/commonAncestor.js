const firstCommonAncestor = (node1, node2) => {
    if (!node1 || !node2) {
        throw new Error('node1 and node2 must both be valid nodes');
    }

    let h1 = height(node1), h2 = height(node2);
    node1 = moveUp(node1, h1 - h2);
    node2 = moveUp(node2, h2 - h1);
    while (node1 !== node2) {
        node1 = node1.parent;
        node2 = node2.parent;
    }

    return node1.val;
}

const height = node => {
    let count = 0;
    while (node) {
        node = node.parent;
        count++;
    }
    return count;
}

const moveUp = (node, count) => {
    for (let i = count; i > 0; i--) {
        node = node.parent;
    }
    return node;
}

// class BinaryTree {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//         this.parent = null;
//     }

//     isAncestor(node2) {
//         if (this === node2) {
//             return true;
//         } else {
//             let answer1 = false;
//             let answer2 = false;
//             if (this.left !== null) {
//                 answer1 = this.left.isAncestor(node2);
//             }
//             if (this.right !== null) {
//                 answer2 = this.right.isAncestor(node2);
//             }
//             return false || answer1 || answer2
//         }
//     }
// }

// const firstCommonAncestor = (node1, node2) => {
//     let currNode = node1;
//     while (!currNode.isAncestor(node2)) {
//         if (currNode === null) {
//             throw Error;
//         } else {
//             currNode = currNode.parent;
//         }
//     }
//     return currNode.value;
// }