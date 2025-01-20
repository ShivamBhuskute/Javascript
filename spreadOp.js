const person = {
    name: "John",
    age: 30,
    city: "Pune",
};

function display(person) {
    console.log("Name:", person.name);
    console.log("Age:", person.age);
    console.log("City:", person.city);

    if (person.job) {
        console.log("Job:", person.job);
    }
}

const newPerson = { ...person, job: "Engineer" };

console.log("Original Person:");
display(person);

console.log("\nNew Person:");
display(newPerson);
