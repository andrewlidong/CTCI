// Brute force solution
// Time O(3^n) | Space O(3^n)
const countWaysBrute = (n) => {
    if (n < 0) {
        return 0;
    } else if (n === 0) {
        return 1;
    } else {
        return countWaysBrute(n - 1) + countWaysBrute(n - 2) + countWaysBrute(n - 3);
    }
};

// Memoization solution
const countWaysMemo = (n, memo = {}) => {
    if (n < 0) {
        return 0;
    } else if (n === 0) {
        return 1;
    } else if (memo[n] > -1) {
        return memo[n];
    } else {
        memo[n] = countWaysMemo(n - 1, memo) + countWaysMemo(n - 2, memo) + countWaysMemo(n - 3, memo);
        return memo[n];
    }
};

console.log(countWaysBrute(1), 1);
console.log(countWaysBrute(2), 2);
console.log(countWaysBrute(3), 4);
console.log(countWaysMemo(1), 1);
console.log(countWaysMemo(2), 2);
console.log(countWaysMemo(3), 4);