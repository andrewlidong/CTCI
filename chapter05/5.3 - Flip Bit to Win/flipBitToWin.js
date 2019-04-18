function flipBitToWin (number) {
    let binaryString = number.toString(2);
    let arrOnes = binaryString.split('0');
    let longest = 0;
    for (let i = 0; i < arrOnes.length - 1; i++) {
        if (arrOnes[i].length + arrOnes[i + 1].length > longest) {
            longest = arrOnes[i].length + arrOnes[i + 1].length;
        }
    }
    longest++;
    return longest;
}

console.log(flipBitToWin(1775), 8);