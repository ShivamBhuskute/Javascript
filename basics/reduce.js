const array = [1, 2, 3, 4, 5];

function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue;
    console.log(
        `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
    );
    return returns;
}

array.reduce(reducer); // without initial value
array.reduce(reducer, 10); // with initial value

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
// for this case initial value must be provided, so that each item passes through your function.

const sum = objects.reduce((accumulator, currentValue) => accumulator + currentValue.x, 0);
console.log("Sum: ", sum);

