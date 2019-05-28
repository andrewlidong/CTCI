function magicSlow(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i) {
            return i;
        }
    }
    return -1;
}

function magicFast(arr, start = 0, end = arr.length - 1) {
    if (end < start) {
        return -1;
    }
    
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === mid) {
        return mid;
    } else if (arr[mid] > mid) {
        return magicFast(arr, start, mid - 1);
    } else {
        return magicFast(arr, mid + 1, end);
    }
}

// function magicFast(arr, start = 0, end = arr.length - 1) {
//     let mid = Math.floor(start + (end - start) / 2);

//     if (start === end && arr[mid] !== mid) {
//         return -1;
//     } else if (arr[mid] === mid) {
//         return mid;
//     } else if (mid < arr[mid]) {
//         return magicFast(arr, start, mid);
//     } else {
//         return magicFast(arr, mid, end);
//     }
// }

function magicFastUnsorted(arr, start = 0, end = arr.length - 1) {
    if (end < start) return -1;

    let midIndex = Math.floor((start + end) / 2);
    let midValue = arr[midIndex];
    if (midValue === midIndex) {
        return midIndex;
    }

    // Search left
    let leftIndex = Math.min(midIndex - 1, midValue);
    let left = magicFastUnsorted(arr, start, leftIndex);
    if (left >= 0) {
        return left;
    }

    // Search right
    let rightIndex = Math.max(midIndex + 1, midValue);
    let right = magicFastUnsorted(arr, rightIndex, end);

    return right;
}
 
console.log(magicSlow([-1, 0, 1, 3, 9, 100]), 3);
console.log(magicSlow([-1, 0, 1, 2, 3, 5, 100, 200, 300, 400, 500, 600, 700]), 5);
console.log(magicSlow([5, 5, 5, 5, 5, 5]), 5); // would need to be in linear runtime if values are not distinct

console.log(magicFast([-1, 0, 1, 3, 9, 100]), 3);
console.log(magicFast([-1, 0, 1, 2, 3, 5, 100, 200, 300, 400, 500, 600, 700]), 5);
console.log(magicFast([5, 5, 5, 5, 5, 5]), 5); // would need to be in linear runtime if values are not distinct

console.log(magicFastUnsorted([-1, 0, 1, 3, 9, 100]), 3);
console.log(magicFastUnsorted([-1, 0, 1, 2, 3, 5, 100, 200, 300, 400, 500, 600, 700]), 5);
console.log(magicFastUnsorted([5, 5, 5, 5, 5, 5]), 5); // would need to be in linear runtime if values are not distinct
