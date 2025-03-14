class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    speak() {
        console.log(`${this.name} barks!`);
    }
    fetch() {
        console.log(`${this.name} fetches the ball!`);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    speak() {
        console.log(`${this.name} meows!`);
    }
    climb() {
        console.log(`${this.name} climbs a tree.`);
    }
}

const genericAnimal = new Animal("Generic Animal");
const myDog = new Dog("Buddy", "Golden Retriever");
const myCat = new Cat("Whiskers", "Tabby");

genericAnimal.speak();
myDog.speak();
myDog.fetch();
myCat.speak();
myCat.climb();

console.log(myDog instanceof Animal);
console.log(myCat instanceof Animal);
console.log(genericAnimal instanceof Dog);
