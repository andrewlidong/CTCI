const permNoDups = function(string) {
    let answers = [];
    const recurse = function(currentPermutation, remainingCharacters) {
        if (remainingCharacters.length === 0) {
            answers.push(currentPermutation);
        } else {
            let usedChars = {};
            for (let i = 0; i < remainingCharacters.length; i++) {
                if (!usedChars[remainingCharacters.charAt(i)]) {
                    usedChars[remainingCharacters.charAt(i)] = true;
                    recurse(currentPermutation + remainingCharacters.charAt(i), remainingCharacters.slice(0, i) + remainingCharacters.slice(i + 1));
                }
            }
        }
    };
    recurse('', string);
    return answers;
};