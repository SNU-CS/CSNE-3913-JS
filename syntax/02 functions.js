// Declaring a function to square a number, n
function squareNumber(n) {
    return n * n;
}

// Binding a variable in the global scope (bad)
const hundred = 100;

// Declaring a function to (naively) exponentiate
function exp(base, exponent) {
    let ret = base;
    for (let i = 1; i < exponent; i++) {
        ret *= base;
    }
    return ret;
}

// error! variable ret isn't in scope here!
// console.log(ret);

// "invoking" or "calling" our exponentiation function
// this would also be termed a "call-site" of exp()
// console.log(exp(2, 10));

/**
 * Efficient, real-world versions of exponentiation:
 *
 * Both of the versions below *should* use optimized assembly instructions for
 * either repeated multiplication or logarithms to quickly compute large powers.
 *
 * JavaScript uses Infinity to represent integers outside the bounds of the type.
 *
 * The largest integer is stored in a constant: Number.MAX_SAFE_INTEGER
 * Bigger than that, you'll need BigInt.
 */
// console.log(Math.pow(2, 100));
// console.log(10 ** 100_000);

// Code as data
function codeAsData() {
    console.log("I ran");
}

const savedFunction = codeAsData;

function passingArgument(fn) {
    fn();
}

passingArgument(savedFunction);

// Partial application
function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplyBy(2);
console.log(double(8));

arry = [1, 2, 3, 4, 5];
output = arry.map(function (i) {
    return i + 1;
});

// Arrow function (anonymous)
output = arry.map((i) => {
    return i + 1;
});

// Arrow function (named)
const power = (base, power) => {
    base ** power;
};

// IIFE = Immediately Invoked Function Expression
//
// This is a function that calls itself at the point of definition. Note the
// Wrapping parentheses! This was once used to keep variables bound with the
// `var` keyword in a kind of "scope" before true block scoping existed in the
// language. Note that once upon a time, only functions had scopes.
(function () {
    console.log("yay");
})();
