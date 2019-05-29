function getSubsets(array) {
    let subsets = [];
    const recurse = function(currentSet, remainingSet) {
        subsets.push(currentSet);
        for (let i = 0; i < remainingSet.length; i++) {
            recurse(currentSet.concat([remainingSet[i]]), remainingSet.slice(i + 1));
        }
    };
    recurse([], set);
    return subsets;
}

console.log(getSubsets([1,2,3,4]));