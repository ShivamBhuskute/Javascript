const myObject = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    grades: [90, 85, null, undefined, NaN, Infinity],
    address: {
        city: "New York",
        zip: "10001",
    },
    func: function () {},
    undef: undefined,
    specialChars: '\b\f\n\r\t"\\',
};

const jsonString = JSON.stringify(myObject);
console.log(jsonString);

const myArray = [1, "test", { a: 1 }, [2, 3]];
const jsonArray = JSON.stringify(myArray);
console.log(jsonArray);

const nullValue = JSON.stringify(null);
console.log(nullValue);

const undefinedValue = JSON.stringify(undefined);
console.log(undefinedValue);

const nanValue = JSON.stringify(NaN);
console.log(nanValue);

const infinityValue = JSON.stringify(Infinity);
console.log(infinityValue);

function replacer(key, value) {
    if (typeof value === "number" && isNaN(value)) {
        return "NaN encountered";
    }
    if (typeof value === "number" && !isFinite(value)) {
        return "Infinity or -Infinity encountered";
    }
    if (typeof value === "function" || value === undefined) {
        return undefined;
    }

    return value;
}

const jsonStringWithReplacer = JSON.stringify(myObject, replacer);
console.log(jsonStringWithReplacer);

const jsonStringWithSpace = JSON.stringify(myObject, null, 2);
console.log(jsonStringWithSpace);
