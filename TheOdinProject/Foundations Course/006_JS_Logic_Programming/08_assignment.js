// calculator
// palindromes
// fibonacci
// getTheTitles
// findTheOldest


const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const palindromes = (str) => {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
};

const fibonacci = (n) => {
    if (n < 0) return 'OOPS';
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
};

const getTheTitles = (books) => books.map(book => book.title);

const findTheOldest = (people) => {
    return people.reduce((oldest, person) => {
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        const personAge = person.yearOfDeath - person.yearOfBirth;
        return personAge > oldestAge ? person : oldest;
    });
};


// Example run
console.log("add(2, 3):", add(2, 3));
console.log("subtract(5, 2):", subtract(5, 2));
console.log("multiply(4, 6):", multiply(4, 6));
console.log("divide(10, 2):", divide(10, 2));
console.log("palindromes('A man, a plan, a canal, a Panama'):", palindromes('A man, a plan, a canal, a Panama'));
console.log("fibonacci(10):", fibonacci(10));
console.log("getTheTitles([{ title: 'Book 1' }, { title: 'Book 2' }]):", getTheTitles([{ title: 'Book 1' }, { title: 'Book 2' }]));
console.log("findTheOldest([{ name: 'Alice', yearOfBirth: 1900, yearOfDeath: 1980 }, { name: 'Bob', yearOfBirth: 1920, yearOfDeath: 1990 }]):", findTheOldest([{ name: 'Alice', yearOfBirth: 1900, yearOfDeath: 1980 }, { name: 'Bob', yearOfBirth: 1920, yearOfDeath: 1990 }]));
