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

console.log(magicSlow([-1, 0, 1, 3, 9, 100]), 3);
console.log(magicSlow([-1, 0, 1, 2, 3, 5, 100, 200, 300, 400, 500, 600, 700]), 5);
console.log(magicSlow([5, 5, 5, 5, 5, 5]), 5); // would need to be in linear runtime if values are not distinct

console.log(magicFast([-1, 0, 1, 3, 9, 100]), 3);
console.log(magicFast([-1, 0, 1, 2, 3, 5, 100, 200, 300, 400, 500, 600, 700]), 5);
console.log(magicFast([5, 5, 5, 5, 5, 5]), 5); // would need to be in linear runtime if values are not distinct
