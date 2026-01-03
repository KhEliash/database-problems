// Database Problem
// 1. Array Filtering and Mapping
const people = [
  { name: "Rahim", age: 25, gender: "male" },
  { name: "Karim", age: 30, gender: "male" },
  { name: "Sumaiya", age: 22, gender: "female" },
];

const getMaleNames = (arr) => {
  return arr
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};

console.log(getMaleNames(people));

// 2. Object Manipulation
const books = [
  { title: "Himu", author: "Humayun Ahmed", year: 1990 },
  { title: "Gitanjali", author: "Tagore", year: 1910 },
];

const getTitles = (arr) => arr.map((book) => book.title);
console.log(getTitles(books));

// 3. Function Composition
const square = (num) => num * num;
const double = (num) => num * 2;
const addFive = (num) => num + 5;

const composedFunc = (num) => addFive(double(square(num)));
console.log(composedFunc(3));

// 4. Sorting Objects
const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Tesla", model: "Model 3", year: 2022 },
  { make: "Honda", model: "Civic", year: 2010 },
];

const sortCars = (arr) => arr.sort((a, b) => a.year - b.year);
console.log(sortCars(cars));

// 5. Find and Modify
const users = [
  { name: "Abir", age: 20 },
  { name: "Sifat", age: 22 },
];

const updateAge = (arr, targetName, newAge) => {
  const person = arr.find((p) => p.name === targetName);
  if (person) person.age = newAge;
  return arr;
};

console.log(updateAge(users, "Abir", 25));

// 6. Leap Year Checker
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(isLeapYear(2024));

// 7. Unique Values
const numbers = [1, 2, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 10];

const uniqueValues = (arr) => [...new Set(arr)];

console.log(uniqueValues(numbers));
