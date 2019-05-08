const primeNative = (n) => {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i ++) {
        if (n % i === 0) return false;
    }
    return true;
};

const primeSlightlyBetter = n => {
    if (n < 2) return false;
    let sqrt = Math.sqrt(n);
    for (let i = 2; i <= sqrt; i++) {
        if (n % i === 0) return false;
    }
    return true;
};

console.log(primeSlightlyBetter(5));