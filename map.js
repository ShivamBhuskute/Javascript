let array = [1, 2, 3, 4, 5];

const arr = function operate(element) {
    return element * element;
}

const modArray = array.map(arr);

// there are two ways of writing this
// const modArray = array.map(function operate(element) {    
//     return element * element;
// })

// map function performs operation on every element
// of the array

console.log(array);
console.log(modArray);
console.log(arr);

const mod = array.filter((name) => {
    return name != 1;
})

console.log(mod);