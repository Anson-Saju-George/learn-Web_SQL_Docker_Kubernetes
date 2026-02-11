
const reverseString = (str) => {
    // Split the string into an array of characters, reverse the array, and join it back into a string
    return str.split("").reverse().join("");
}

console.log(reverseString("abcd")); // Output: "dcba"