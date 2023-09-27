// custom error type
class ZeroDivisionError extends Error {
    constructor(message) {
        super(message); // call the parent constructor with the message
        this.name = "ZeroDivisionError"; // set the error name to our custom error's name
        // Capture the stack trace (optional, but could be useful for debugging)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ZeroDivisionError);
        }
    }
}

// debugger example
function myDivide(n, d) {
    // click the margin to the left (in VSCode) to create a breakpoint
    if (d === 0) {
        // raising an Exception if we divide by zero
        throw new ZeroDivisionError("don't divide by zero, sir or madam");
    }
    return n / d;
}

// exception handling example
try {
    // this block will run first
    myDivide(8, 0);
    myDivide(8, 2); // doesn't run, exception happens first!
} catch (error) {
    // this block will run if an Exception occurs
    console.log(error);
} finally {
    // this block runs no matter what
    console.log("I run no matter what");
}
