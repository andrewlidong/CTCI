const permuteString = string => {
    let answers = [];
    const recurse = function(currentPermutation, remainingCharacters) {
        if (remainingCharacters.length === 0) {
            answers.push(currentPermutation);
        } else {
            for (let i = 0; i < remainingCharacters.length; i++) {
                recurse(currentPermutation + remainingCharacters.charAt(i), remainingCharacters.slice(0,i) + remainingCharacters.slice(i + 1));
            }
        }
    };
    recurse('', string);
    return answers;
};

let testString = 'abcd';
console.log(permuteString(testString));