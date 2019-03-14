// Given a string, write a function to check if it is a permutation of a palindrome.  A palindrome is a word or phrase that is the same forwards and backwards.  A permutation is a rearrangement of letters.  

// O(N) time, O(N) space.  Add characters to a set, remove when they become odd, and return if there are any more than 1 character left in the set.  
const palindromePerm = str => {
    if (!str) {
        return false;
    }


    let chars = new Set();
    for (let char of str.toLowerCase()) {
        if (char !== ' ') {
            if (chars.has(char)) {
                chars.delete(char);
            } else {
                chars.add(char);
            }
        }
    }
    return chars.size <= 1;
}


let str = "Tact Coab";
console.log(palindromePerm(str));