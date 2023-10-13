/**
 * Sometimes, we might want to wrap code that we do not directly control,
 * perhaps because it is part of our codebase that we do not wish to modify
 * directly, or perhaps because it is part of an external library used elsewhere
 * in our program. In these cases, we can rely on metaprogramming features,
 * which allow us to, for example, wrap third-party code with our code.
 *
 * In the future, it is likely that JavaScript will adopt decorator functions,
 * similar to Python. You can use them earlier, if you'd like, by opting-in to
 * the Babel JavaScript compiler.
 *
 * Read more about decorator functions here:
 * https://2ality.com/2022/10/javascript-decorators.html
 *
 * Read about the Babel compiler (which enables many future JS features) here:
 * https://babeljs.io/
 */

// A higher-order function which takes a function and returns a new function
function createLoggingFunction(func) {
    return function (...args) {
        // This pattern is sometimes called "execute around"
        console.log(`Function ${func.name} was called with arguments: ${args}`);
        const result = func.apply(this, args); // call the original function
        console.log(`Function ${func.name} returned: ${result}`);
        return result; // return the result of the original function
    };
}

// A simple function for which we might want to add logging
function add(a, b) {
    return a + b;
}

// Creating a new function that adds logging around the "add" function
const loggedAdd = createLoggingFunction(add);

// When we call our new function, it will log details about the call
console.log(loggedAdd(3, 4));

// A more complex example that uses a Proxy object, as discussed in class
function createLoggingProxy(target) {
    return new Proxy(target, {
        // Proxies allow us to intercept multiple operations, property accesses,
        // and even future method additions to our target object
        get(target, property) {
            const originalValue = target[property];

            if (typeof originalValue === "function") {
                return function (...args) {
                    console.log(
                        `Function ${property} called with arguments: ${args}`,
                    );
                    const result = originalValue.apply(target, args);
                    console.log(`Function ${property} returned: ${result}`);
                    return result;
                };
            }

            return originalValue;
        },
    });
}

// Example; note that this is an *object*!
const obj = {
    add(a, b) {
        return a + b;
    },
};

// Using our Proxy object for logging
const loggedObj = createLoggingProxy(obj);

// Calling methods on loggedObj will log information about the call
console.log(loggedObj.add(1, 2));
