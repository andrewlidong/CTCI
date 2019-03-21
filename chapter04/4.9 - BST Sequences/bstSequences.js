const bstSequences = (bst) => {
    let sequences = [];
    const recurse = function(nodes, travelled) {
        let noChild = true;
        nodes.forEach((node) => {
            if (node.left !== null && travelled[node.left.value] === undefined) {
                noChild = false;
                travelled[node.left.value] = true;
                recurse(nodes.concat([node.left]), travelled);
                delete travelled[node.left.value];
            }
            if (node.right !== null && travelled[node.right.value] === undefined) {
                noChild = false;
                travelled[node.right.value] = true;
                recurse(nodes.concat([node.right]), travelled);
                delete travelled[node.right.value];
            }
        });
        if (noChild) {
            sequences.push(nodes.map(node => node.value));
        }
    };
    let startTravelled = {};
    startTravelled[bst.value] = true;
    recurse([bst], startTravelled);
    return sequences;
}

// const sequencesToCreateBST = tree => {
//     if (!tree || !tree.root) {
//         return null;
//     }

//     return sequencesRecursive(tree.root);
// }

// const sequencesRecursive = node => {
//     if (!node) {
//         return null;
//     } else {
//         let perms = permutations(sequencesRecursive(node.left), sequencesRecursive(node.right));
//         if (!perms) {
//             perms = [[node.val]];
//         } else {
//             perms.forEach(p => p.unshift(node.val));
//         }
//         return perms;
//     }
// }

// const permutations = (left, right) => {
//     if (!left || !right) {
//         return left || right;
//     } else {
//         let perms = [];
//         for (let i = 0; i < left.length; i++) {
//             for (let j = 0; j < right.length; j++) {
//                 perms.push.apply(perms, permutationsRecursive([], left[i], right[j], [], 0, 0));
//             }
//         }
//         return perms;
//     }
// }

// const permutationsRecursive = (perms, list1, list2, prefix, i, j) => {
//     if (i === list1.length && j === list2.length) {
//         perms.push(prefix.slice(0));
//     } else {
//         if (i < list1.length) {
//             prefix.push(list1[i]);
//             permutationsRecursive(perms, list1, list2, prefix, i + 1, j);
//             prefix.pop();
//         }

//         if (j < list2.length) {
//             prefix.push(list2[j]);
//             permutationsRecursive(perms. list1, list2, prefix, i, j + 1);
//             prefix.pop();
//         }
//     }
//     return perms;
// }