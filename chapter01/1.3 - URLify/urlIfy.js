// Write a method that replaces all spaces in a string with %20.  Assume the string has enough space to hold additional characters and you're given the 'true' length.  

// O(k) time and O(1) space iterating from the back of the true length.  

const urlIfy = (str, trueLength) => {
    let backIdx = str.length - 1;
    str = str.split('');
    for (let i = trueLength - 1; i >= 0; i--) {
        if (str[i] === ' ') {
            str[backIdx] = '0';
            str[backIdx - 1] = '2';
            str[backIdx - 2] = '%';
            backIdx = backIdx - 3;
        } else {
            str[backIdx] = str[i];
            backIdx --;
        }
    }
    return str.join('');
}

let str = 'Mr John Smith    ';
console.log(str);
let trueLength = 13;
console.log(urlIfy(str, trueLength));