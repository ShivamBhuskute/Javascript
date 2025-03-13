const numbers = [10, 20, 30, 40, 50];

const foundNumber = numbers.find((num) => num > 25);
console.log(foundNumber); // 30

const foundIndex = numbers.findIndex((num) => num > 25);
console.log(foundIndex); // 2
