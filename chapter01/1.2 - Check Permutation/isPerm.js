// Given two strings, write a method to decide if one is a permutation of the other.  

// O(aloga + blogb) time, O(1) space sort both strings and compare them.  
const isPerm = (str1, str2) => {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

const isPerm2 = (str1, str2) => {
    if (str1.length === 0 || str1.length !== str2.length) {
        return false;
    }  

    let chars = new Object();
    for (let i = 0; i < str1.length; i++) {
        chars[str1[i]] = chars[str1[i]] + 1 || 1;
    }
    for (let i = 0; i < str2.length; i++) {
        if (chars[str2[i]]) {
            chars[str2[i]] = chars[str2[i]] - 1;
        } else {
            return false;
        }
        if (chars[str2[i]] === 0) {
            delete(chars[str2[i]]);
        }
    }
    return Object.keys(chars).length === 0;
}


const str1 = "abcafe"
const str2 = "bcaaefg"
console.log(isPerm2(str1, str2));