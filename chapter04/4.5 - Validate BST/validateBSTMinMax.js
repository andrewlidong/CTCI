const checkBST = n => {
    return checkBST(n, null, null);
}

const checkBST = (n, min, max) {
    if (n === null) {
        return true;
    }
    if ((min !== null && n.value <= min) || (max !== null & n.value > max)) {
        return false;
    }
    if (!checkBST(n.left, min, n.value) || !checkBST(n.right, n.value, max)) {
        return false;
    }
    return true;
}