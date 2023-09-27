// Defining functions with arbitrary unused parameters is allowed
function add(n1, n2, n3) {
    return false;
}

// Calling a function with more arguments than the definition allows
console.log(add(1, 2, 3, 5));

// Defining a function with default parameters (defaults are used if not given
// by the caller)
function power(n, e = 2) {
    return n ** e;
}

console.log(power(2, 3)); // not using default parameter
console.log(power(3)); // using default parameter value of 2

// Defining a function with "rest" parameters
// This allows passing in a variable number of arguments.
// ...Which is sometimes termed "variadic arguments".
function sum(...numbers) {
    let total = 0;
    // note the use of a for..of loop for simple iteration
    for (const number of numbers) {
        total += number;
    }
    return total;
}

// Be sure to pass in the arguments as arguments (not as an array). If you pass
// them in as an array, they will be concatenated (which we saw in class)
console.log(sum(1, 2, 3, 4));

// Let's build a function to concatenate (glue together) an arbitrary number of
// strings using the rest parameter syntax
function stringConcat(...strings) {
    finalString = "";
    for (const s of strings) {
        finalString += s;
    }
    return finalString;
}

console.log(stringConcat("hello", " ", "awesome", " ", "world"));
