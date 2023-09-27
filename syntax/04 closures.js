// Example of a closure
function outerFunction() {
    const outerVariable = "I'm an outer variable";

    // innerFunction has access to outerVariable, even after outerFunction has
    // finished executing. We say that innerFunction has "closed over"
    // outerVariable.
    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // This will log: "I'm an outer variable"

function normalFunction() {
    const exampleVariable = 1;
    console.log(exampleVariable);
}

console.log(exampleVariable);

normalFunction();
