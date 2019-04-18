function countBits(number) {
    let string = number.toString(2);
    return string.split('').reduce((numBits, char) => {
        return char === '1' ? numBits + 1 : numBits;
    }, 0);
}

function conversion(num1, num2) {
    return countBits(num1 ^ num2);
}

console.log(conversion(29, 15), 2);