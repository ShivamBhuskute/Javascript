let myArray = [1, 2, 3, 4, 5]
function modArray(E1, E2) {
    return E1 + E2;
}
//returns sum

const reducedArray = myArray.reduce(modArray, 0);
console.log(myArray);
console.log(reducedArray);