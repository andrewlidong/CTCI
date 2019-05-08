const findRatio = population => {
    let answer = 0;
    for (let i = 1; i < population; i++) {
        answer += (i - 1) / Math.pow(2, i);
    }
    return answer;
};