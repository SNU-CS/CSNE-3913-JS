// Build a simple human class
export class Human extends Mammal {
    constructor(name, age, isHuman = true) {
        super();
        this.name = name;
        this.age = age;
        this.isHuman = isHuman;
    }

    /**
     *
     * This is a "getter" method for the name property of our Human class.
     *
     * Note that `get` is a standalone keyword!
     *
     * Creating a getter or setter method enables stricter encapsulation rules
     * for the class as a whole. This allows us to control access to fields from
     * outside the class. Remember that JavaScript is very much not a strict
     * language, despite these features.
     *
     * If we do not create getter or setter methods, all properties are
     * accessible by default.
     */
    get name() {
        return this.name;
    }

    // setter method for Human.name
    set name(n) {
        this.name = n;
    }

    // getter method for Human.age
    get age() {
        return this.age;
    }

    // getter method for Human.age
    set age(n) {
        this.age = n;
    }

    // method that doesn't take arguments
    travel() {
        return "I am walking";
    }

    // method with argument
    timeTillRetirement(retirementAge) {
        // use of internal property (references this, the instance itself)
        return retirementAge - this.age;
    }
}

const bob = new Human("Bob", 102);

// Advanced example (multiple inheritance)
class Mammal {
    constructor() {
        this.isMammal = true;
    }

    breathe() {
        console.log("Breathing...");
    }
}

class WingedAnimal {
    constructor() {
        this.hasWings = true;
    }

    fly() {
        console.log("Flying...");
    }
}

class Bat {
    constructor() {
        this.mammal = new Mammal();
        this.wingedAnimal = new WingedAnimal();
    }

    echoLocation() {
        console.log("Using echolocation...");
    }

    // Proxy methods to respective classes
    breathe() {
        return this.mammal.breathe();
    }

    fly() {
        return this.wingedAnimal.fly();
    }

    get isMammal() {
        return this.mammal.isMammal;
    }

    get hasWings() {
        return this.wingedAnimal.hasWings;
    }
}

// instantiating a class
const bat = new Bat();

console.log(bat.isMammal); // Output: true
console.log(bat.hasWings); // Output: true

bat.breathe(); // Output: "Breathing..."
bat.fly(); // Output: "Flying..."
bat.echoLocation(); // Output: "Using echolocation..."
