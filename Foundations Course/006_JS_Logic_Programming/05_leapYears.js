// Leap Years

// A leap year is a year that is divisible by 4, except for years that are
// divisible by 100 but not divisible by 400. This means that the year 2000
// was a leap year, but the year 1900 was not.

const leapYears = (year) => {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; // Divisible by 400, it's a leap year
            }
            return false; // Divisible by 100 but not by 400, not a leap year
        }
        return true; // Divisible by 4 but not by 100, it's a leap year
    }
    return false; // Not divisible by 4, not a leap year
}

// Example usage:
console.log(leapYears(2000)); // Output: true
console.log(leapYears(1900)); // Output: false
console.log(leapYears(2020)); // Output: true
console.log(leapYears(2021)); // Output: false
