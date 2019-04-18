function countOnes (string) {
    console.log(string);
    let strArray = string.split('');
    return strArray.reduce((count, char) => {
        return char === '1' ? count + 1 : count;
    }, 0);
}

function next (number, numOnes, iterator) {
    let currNum = iterator(number);
    while (countOnes(currNum.toString(2)) !== numOnes) {
        currNum = iterator(currNum);
    }
    return currNum;
}

function nextSmallest (number, numOnes) {
    return next(number, numOnes, currNum => currNum - 1);
}

function nextLargest (number, numOnes) {
    return next(number, numOnes, currNum => currNum + 1);
}

function nextNumber (number) {
    let binary = number.toString(2);
    let numOnes = countOnes(binary);
    console.log('number', number.toString(2));
    console.log('nextSmallest', nextSmallest(number, numOnes).toString(2));
    console.log('nextLargest', nextLargest(number, numOnes).toString(2));
}

nextNumber(10000000000000000);