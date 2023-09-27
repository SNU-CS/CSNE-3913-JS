// Here we repeat a string 10 times
const myString = "I am string";
console.log(myString.repeat(4)); // We didn't add the repeat() method. It's in the String prototype!

// Here we modify the string prototype (BAD)
// We actually changed the built-in behavior!!
String.prototype.repeat = (n) => {
    return `I am repeating ${n} times`;
};

// *ALL* strings now have this behavior!! (BAD)
console.log(myString.repeat(4));
console.log("any string".repeat(4));

// Complex prototype example (multiple inheritance)
// NOTE: most JS programs would use classes instead
function Mammal() {
    this.isMammal = true;
}

Mammal.prototype.breathe = function () {
    console.log("Breathing...");
};

function WingedAnimal() {
    this.hasWings = true;
}

WingedAnimal.prototype.fly = function () {
    console.log("Flying...");
};

function Bat() {
    Mammal.call(this);
    WingedAnimal.call(this);
}

// Inheriting methods from Mammal and WingedAnimal
Bat.prototype = Object.create(Mammal.prototype);
Object.assign(Bat.prototype, WingedAnimal.prototype);

// Adding a method to our Bat prototype
Bat.prototype.echoLocation = function () {
    console.log("Using echolocation...");
};

const bat = new Bat();
console.log(bat.isMammal);
console.log(bat.hasWings);
bat.breathe();
bat.fly();
bat.echoLocation();
