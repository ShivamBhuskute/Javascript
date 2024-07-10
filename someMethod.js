const ages = [3, 10, 18, 20];
function checkAdult(age) {
    return age > 18;
}
const anyAdult = ages.some(checkAdult); // Returns true because 20 > 18
console.log(anyAdult);


// 1. The some() method executes a provided callback function once for each element in the array.
// 2. It returns true if the callback function returns true for at least one element.
// 3. If the callback function returns false for all elements, it returns false.