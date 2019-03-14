// Implement a basic compression using the counts of repeated characters.  

// String concatenation is trash (O(N^2)), so this is actually O(p + k^2) where p is the size of the original string and k is the number of character sequences.  O(2P) space.  
const stringCompression = str => {
    let result = '';
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        counter++;
        if (i + 1 >= str.length || str[i] !== str[i + 1]) {
            result += "" + str[i] + counter.toString();
            counter = 0;
        }
    }
    return result.length < str.length ? result : str;
}
// JavaScript does not have a StringBuilder class for creating strings.  It's been optimized though, so it's better than making a dynamically resizable array and joining at the end.  

let str = "aabcccccaaabcsdfsaefd"
console.log(stringCompression(str));