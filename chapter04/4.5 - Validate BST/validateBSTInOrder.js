let index = 0;
const copyBST = (root, array) => {
    if (root === null) return;
    copyBST(root.left, array);
    array[index] = root.value;
    index++;
    copyBST(root.right, array);
}

const checkBST = (root) => {
    let array = new Array(root.size());
    copyBST(root, array);
    for (let i = 1; i < array.length; i++) {
        if (array[i] <= array[i - 1]) return false;
    }
    return true;
}

let lastPrinted = null;
const checkBST = n => {
    if (n === null) return true;

    if (!checkBST(n.left)) return false;

    if (lastPrinted !== null && n.value <= lastPrinted) {
        return false;
    }
    lastPrinted = n.value;

    if (!checkBST(n.right)) return false;

    return true;
}