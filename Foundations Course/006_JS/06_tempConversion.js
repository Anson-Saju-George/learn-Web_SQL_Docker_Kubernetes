// Temperature Converter
// Create a function that takes a temperature in Celsius or Fahrenheit and converts it to the other unit.
// The function should take a string as an argument. The string should consist of a number followed by
// either "C" or "F". For example, "35C" or "100F".


function tempConversion(temp) {
  let unit = temp.slice(-1).toUpperCase();
  let value = parseFloat(temp.slice(0, -1));
    if (unit === "C") {
        return (value * 9/5) + 32 + "F";
    } else if (unit === "F") {
        return ((value - 32) * 5/9).toFixed(2) + "C";
    } else {
        return "Invalid input";
    }
}

console.log(tempConversion("35C"));
console.log(tempConversion("100F"));



