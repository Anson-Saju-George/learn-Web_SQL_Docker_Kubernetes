// Map to names

// Map to objects
// Sort users by age
// Get average age
// Create keyed object from array
const users = [
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 35 },
    { id: 3, name: "Cara", age: 22 },
    { id: 4, name: "Dan", age: 31 }
];

// Map to names
const names = users.map(u => u.name);

// Map to objects
const slimUsers = users.map(({ id, name }) => ({ id, name }));

// Sort users by age
const byAge = [...users].sort((a, b) => a.age - b.age);

// Get average age
const averageAge = users.reduce((sum, u) => sum + u.age, 0) / users.length;

// Create keyed object from array
const keyedById = users.reduce((acc, u) => {
    acc[u.id] = u;
    return acc;
}, {});

// Example run
console.log("names:", names);
console.log("slimUsers:", slimUsers);
console.log("byAge:", byAge);
console.log("averageAge:", averageAge);
console.log("keyedById:", keyedById);