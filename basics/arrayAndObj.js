array = [1, 2, 3, 4, 5];

array.forEach((element) => console.log(Number(element) * 5));

console.log(array);

// map function returns a new array, it transforms element and same length as the original
const mappedArray = array.map((element) => element * 5);
// const mappedArray = array.map((element) => element % 2 === 0);
console.log("mapped array: " + mappedArray);


// filter function selects elements, can vary in size
const evenNumbers = array.filter((element) => element % 2 === 0);
console.log("Filter function: ", evenNumbers);

// map changes what is in the array and filter changes which elements are in the array
