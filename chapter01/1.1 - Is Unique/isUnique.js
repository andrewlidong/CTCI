// Implement an algorithm to determine if a string has all unique characters.  What if you cannot use additional data structures?  

// O(n^2) time O(1) space with no new data structures.  For each character, check remaining characters for duplicates.  
const isUnique = str => {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

// O(n) time O(n) space with a set, inserting into a set and peeking into the set to look for duplicates.  
const isUnique2 = str => {
    let chars = new Set();

    for (let i = 0; i < str.length; i++) {
        if (chars.has(str[i])) {
            return false;
        }
        chars.add(str[i]);
    }
    return true;
}

// O(nlogn) time, O(1) space, sort the string then compare.  
const isUnique3 = str => {
    // sort the string with quicksort
    str.split('').sort().join('');

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(isUnique3("abc"));

