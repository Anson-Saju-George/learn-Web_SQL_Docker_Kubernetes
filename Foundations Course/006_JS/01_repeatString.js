console.log("Hey! This is the no. three: -", 3);

const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let result = "";
    for (let i = 0; i < num; i++) {
        result += string;
    }
    return result;
};

// Example usage:
console.log(repeatString("abc", 3)); // Output: "abcabcabc"
// Do not edit below this line
module.exports = repeatString;
