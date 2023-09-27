// Create a simple object
const obj = {};

// Put something in an object
obj.something = "hello";

// Define an object with something else in it at the start
otherObj = { somethingElse: [1, 2, "banana"] };

// Get a value inside a nested object + array
console.log(otherObj.somethingElse[2]);

// We can store functions in objects, too
fullObj = {
    addOne: (n) => {
        return n + 1;
    },
    otherObject: {
        foo: "foo",
        bar: "bar",
    },
};
console.log(fullObj.addOne(1));

// Optional chaining operator (?.)
console.log(fullObj?.foo?.bar);

// Object mutability
const mutable = {}.freeze;

// Causes an error, the object is frozen!
// mutable.foo = "bar";

// Functions are objects?
const maybeObject = (n) => {
    return n + 1;
};
maybeObject.foo = "bar";
console.log(maybeObject(1));
