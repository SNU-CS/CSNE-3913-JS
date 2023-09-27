const isEqual = require("lodash.isequal");

// A function that can run another (arbitrary) function n number of times
function repeat(n, actionFunc) {
    // call action n number of times
    for (let i = 0; i < n; i++) {
        actionFunc();
    }
}

// A function that just prints "Hello"
function sayHello() {
    console.log("Hello");
}

// Repeating our message 500 times
// console.log(repeat(500, sayHello));

// Calling our repeat function with an anonymous function argument
// repeat(10, () => {
//     console.log("anonymous hello");
// });

// Implementing our own version of the built-in filter method
const arr = [1, 2, 3, 4, 5]; // array that we want to filter
// Our filtering function takes an array and a function as arguments
function ourFilter(arr, filterFunc) {
    const ret = [];
    for (let i = 0; i < arr.length; i++) {
        if (filterFunc(arr[i]) === true) {
            ret.push(arr[i]);
        }
    }
    return ret;
}

// Call our filtering function with an anonymous function as the argument and
// store the resulting filtered array for later use
const ourFilteredArray = ourFilter(arr, (value) => {
    if (value % 2 === 0) {
        return true;
    }
    return false; // base case
});

// How good is our version of filter? Let's compare it to JavaScript's built-in
// filter method:
const realFilteredArray = arr.filter((i) => {
    return i % 2 === 0;
});

// We can do a deep comparison of arrays using lodash.isEqual()
// (This library is listed in package.json and required above)
if (isEqual(ourFilteredArray, realFilteredArray)) {
    console.log("The filtering methods result in the same array!");
} else {
    console.log("The filtering methods do not result in the same array!");
}

// Implementing our own version of map()
function ourMap(arr, mapFunc) {
    ret = []; // Note: we're not mapping in-place
    for (let i = 0; i < arr.length; i++) {
        ret.push(mapFunc(arr[i]));
    }
    return ret;
}

// Storing our own version of map
const ourMappedArray = ourMap(arr, (i) => {
    return i + 2;
});

// How good is our version of map? Let's compare it to JavaScript's built-in
// map method:
const realMappedArray = arr.map((i) => {
    return i + 2;
});

// Using lodash.isEqual to test for deep equality
if (isEqual(ourMappedArray, realMappedArray)) {
    console.log("The map methods result in the same array!");
} else {
    console.log("The map methods do not result in the same array!");
}

// Implementing our own version of reduce
function ourReduce(arr, reduceFunc) {
    let acc = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            acc = arr[i];
        } else {
            acc = reduceFunc(acc, arr[i]);
        }
    }
    return acc;
}

// Storing our own version of reduce
const ourReducedArray = ourReduce(arr, (i, j) => {
    return i + j;
});

// How good is our version of reduce? Let's compare it to JavaScript's built-in
// reduce method:
const realReducedArray = arr.reduce((i, j) => {
    return i + j;
});

// Using lodash.isEqual to test for deep equality
if (isEqual(ourReducedArray, realReducedArray)) {
    console.log("The reduce methods result in the same array!");
} else {
    console.log("The reduce methods do not result in the same array!");
}

// Implementing reduce as a tail-recursive function
function functionalReduce(arr, fn, acc) {
    // Split the array for each iteration
    const [first, ...rest] = arr;

    // Out of items means it's time to return!
    // We call this the base case
    if (rest.length === 0) {
        return fn(acc, first);
    }

    // Ternary is shorter here (when we don't have a nested if/else)
    // Use ternary expressions with caution... they can be hard to read!
    return acc === undefined // the condition under test... ? is true : is false
        ? functionalReduce(rest, fn, first) // First time through, acc is undefined
        : functionalReduce(rest, fn, fn(acc, first)); // All other times, acc is defined
}

// Storing our own (functional) version of reduce
const ourFunctionallyReducedArray = functionalReduce(arr, (i, j) => {
    return i + j;
});

// Using lodash.isEqual to test for deep equality
if (isEqual(ourFunctionallyReducedArray, realReducedArray)) {
    console.log("The recursive method results in the same array!");
} else {
    console.log("The recursive method does not result in the same array!");
}

// timing example (executing around / wrapped execution)

function timeFunctionExecution(fn) {
    return function (...args) {
        console.time("Execution Time");
        const result = fn(...args);
        console.timeEnd("Execution Time");
        return result;
    };
}

const slowFunction = () => {
    for (let i = 0; i < 1e7; i++) {}
    return "Function executed";
};

const timedSlowFunction = timeFunctionExecution(slowFunction);
timedSlowFunction(); // Logs the execution time to the console
