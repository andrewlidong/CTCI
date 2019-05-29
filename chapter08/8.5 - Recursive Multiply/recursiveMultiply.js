const minProduct = (a,b) => {
    let bigger = a < b ? b : a;
    let smaller = a < b ? a : b;
    return minProductHelper(smaller, bigger);
};

const minProductHelper = (smaller, bigger) => {
    if (smaller === 0) {
        return 0;
    } else if (smaller === 1) {
        return bigger;
    }

    let s = smaller >> 1; // Divide by 2
    let side1 = minProductHelper(s, bigger);
    let side2 = side1;
    if (smaller % 2 === 1) {
        side2 = minProductHelper(smaller - s, bigger);
    }

    return side1 + side2;
};

const betterMinproduct = (a,b) => {
    let bigger = a < b ? b : a;
    let smaller = a < b ? a : b;

    return betterMinProductHelper(smaller, bigger, memo = {});
};

const betterMinProductHelper = (smaller, bigger, memo = {}) => {
    if (smaller === 0) {
        return 0;
    } else if (smaller === 1) {
        return bigger;
    } else if (memo[smaller] > 0) {
        return memo[smaller];
    }

    let s = smaller >> 1; // divide by 2
    let side1 = betterMinProductHelper(s, bigger, memo); // compute half
    let side2 = side1;
    if (smaller % 2 === 1) {
        side2 = betterMinProductHelper(smaller - s, bigger, memo);
    }

    memo[smaller] = side1 + side2;
    return memo[smaller];
};

const bestMinProduct = (a,b) => {
    let bigger = a < b ? b : a;
    let smaller = a < b ? a : b;
    return bestMinProductHelper(smaller, bigger);
};

const bestMinProductHelper = (smaller, bigger) => {
    if (smaller === 0) return 0;
    else if (smaller === 1) return bigger;

    let s = smaller >> 1; // divide by 2
    let halfProd = bestMinProductHelper(s, bigger);

    if (smaller % 2 === 0) {
        return halfProd + halfProd;
    } else {
        return halfProd + halfProd + bigger;
    }
};