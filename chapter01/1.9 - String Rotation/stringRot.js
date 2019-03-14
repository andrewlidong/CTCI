// Given two strings write code to check if s2 is a rotation of s1 using one call to isSubstring (which checks if one word is a substring of another).  

const isRotation = (str1, str2) => {
    let len = str1.length;
    if (len === str2.length && len > 0) {
        let str1str1 = str1 + str1;
        return isSubstring(str1str1, str2);
    }
    return false;
}

const isSubstring = (str1, str2) => {
    return str1.includes(str2);
}

let str1 = "waterbottle"
let str2 = "erbottlewatr"
console.log(isRotation(str1, str2));