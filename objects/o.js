const person = {
    name: "John",
    age: 30,
    city: "New York",
    age: function () { return 30; }
};

console.log(Object.values(person));//array

person.age = person.age.toString();

//json string method
let myString = JSON.stringify(person);
console.log(myString);

// it cannot stringify functions
// but if function is coneverted to string it can be done
