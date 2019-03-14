// Given two strings, check if they are one edit away.  

// O(N) time, O(1) space.  Iterate through each, checking for more than one edit.  
const oneAway = (str1, str2) => {
    if (str1.length === str2.length) {
        return checkReplace(str1, str2);
    } else if (str1.length - str2.length === 1) {
        return checkInsert(str2, str1);
    } else if (str2.length - str1.length === 1) {
        return checkInsert(str1, str2);
    } else {
        return false;
    }
}

checkReplace = (str1, str2) => {
    let replaced = false;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            if (replaced) {
                return false;
            }
            replaced = true;
        }
    }
    return true;
}

checkInsert = (smallStr, bigStr) => {
    let next = false;
    for (let i = 0; i < smallStr.length; i++) {
        if (smallStr[i] !== bigStr[i]) {
            if (next) {
                return false;
            }
            next = true;
        }
    }
    return true;
}

// O(N) time, O(1) space, a little cleaner but doing the same thing.  
oneAway2 = (str1, str2) => {
    if (Math.abs(str1 - str2) > 1) {
        return false;
    }

    let s1 = str1.length < str2.length ? str1 : str2;
    let s2 = str1.length < str2.length ? str2 : str1;

    let checker = false;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (checker) {
                return false;
            }
            checker = true;
        }
    }
    return true;
}

let str1 = "cafe";
let str2 = "cate";
console.log(oneAway2(str1, str2));