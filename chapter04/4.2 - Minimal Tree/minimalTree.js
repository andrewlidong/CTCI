const Queue = require('../queue');
const BST = require('../bst');

const minimalTree = array => {
    let bst = new BST();
    let q = new Queue();
    let currArr;
    let floor = Math.floor;
    q.add(array);
    while (!q.isEmpty()) {
        currArr = q.remove();
        bst.insert(currArr[floor(currArr.length / 2)]);
        if (currArr.slice(0, floor(currArr.length / 2)).length > 0) {
            q.add(currArr.slice(0, floor(currArr.length / 2)));
        }
        if (currArr.slice(floor(currArr.length / 2) + 1).length > 0) {
            q.add(currArr.slice(floor(currArr.length / 2) + 1));
        }
    }
    return bst;
}

let arr1 = [1,2,3,4,5];
let tree1 = minimalTree(arr1);
tree1.printLevelOrder();