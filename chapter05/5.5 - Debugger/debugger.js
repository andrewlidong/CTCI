function mysteriousFunction(n) {
    return ((n & (n - 1)) === 0);
}

for (let i = 1; i < 10000; i++) {
    if (mysteriousFunction(i)) {
        console.log(i);
    }
}