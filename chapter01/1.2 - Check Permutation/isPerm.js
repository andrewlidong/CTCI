// Given two strings, write a method to decide if one is a permutation of the other.  

const isPerm = (str1, str2) => {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

const str1 = "abc"
const str2 = "bca"
console.log(isPerm(str1, str2));