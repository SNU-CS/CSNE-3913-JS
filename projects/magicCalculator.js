// Requirements: create a function that takes in two integers and an operator
// and returns the result of performing that calculation
function magicCalculator(number, number2, operator) {
    // I've used a switch here, but you could just as easily use if/else
    switch (operator) {
        case "+":
            return number + number;
        case "-":
            return number - number2;
        case "*":
            return number * number2;
        case "/":
            if (number2 === 0) {
                // Note the use of a specific error here instead of console.log
                throw new RangeError("Cannot divide by 0");
            }
            // Note that I don't need else here because the if statement above
            // will throw an error if number2 is 0. This pattern is called early
            // return.
            return number / number2;
        case "%":
            return number % number2;
        default:
            // Using a specific error helps users of our calculator understand
            // what went wrong when they pass in the wrong operator
            throw new TypeError("Invalid operator");
    }
}

/**
 * Normally, we would want to use a test framework like Jest or Mocha to test
 * our code.  However, for the sake of simplicity, we will just use a try/catch
 * block to test our magic calculator by exercising it directly.
 */
try {
    console.log(magicCalculator(1, 2, "+"));
    console.log(magicCalculator(1, 2, "-"));
    console.log(magicCalculator(1, 2, "*"));
    console.log(magicCalculator(1, 2, "/"));
    console.log(magicCalculator(1, 2, "%"));
    console.log(magicCalculator(1, 2, "a"));
    console.log(magicCalculator(1, 0, "/")); // never runs
} catch (error) {
    console.log(error);
} finally {
    // runs whether there is an error or not
    // the place to clean up resources
    console.log("I ran");
}

/**
 * JavaScript also has a built-in eval() method which can be used to directly
 * evaluate a string as code. This seems like a pretty nice shortcut! Why could
 * this be a very bad idea? Hint: put on your "black hat".
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
 */
