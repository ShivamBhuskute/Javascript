const greet = function (greetings) {
    return function (name) {
        console.log(`${greetings} ${name}`);
    }
}

const greeterhey = greet('hey');
greeterhey('nick');
greeterhey('jonas');