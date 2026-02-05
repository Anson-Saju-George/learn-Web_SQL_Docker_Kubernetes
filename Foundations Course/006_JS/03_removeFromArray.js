// Remove from Array

const removeFromArray = (arr, ...args) => {
    // Filter the array to include only elements that are not in the args
    return arr.filter(element => !args.includes(element));
}


console.log(removeFromArray([1, 2, 3, 4], 3)); // Output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, "t", 2)); // Output: [1, 3, 4]