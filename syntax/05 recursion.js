// Simple example of recursion
function factorial(n) {
    // Base case: If n is 1, return 1 (because 1! is 1)
    if (n === 1) {
        return 1;
    }
    // Recursive case: n times factorial of (n-1)
    return n * factorial(n - 1);
}

console.log(factorial(5)); // This will log: 120

/**
 * Tail recursion is a special case of recursion where the recursive call is the
 * last thing that happens in the function. This allows the JavaScript engine to
 * optimize the function call stack and avoid stack overflow errors.
 *
 * In the first example, the factorial function is not tail-recursive because
 * the recursive call is not the last thing that happens in the function. In the
 * second example, the factorialTailRecursive function is tail-recursive because
 * the recursive call is the last thing that happens in the function.
 *
 * If a non-tail-recursive function is called with a large input, it could cause
 * a stack overflow error. This is because the JavaScript engine has to store
 * the state of each function call in the call stack.
 *
 * In the tail-recursive version, we have to keep the accumulator as a parameter
 * to the function in order to not branch our recursive calls. This allows the
 * JS engine to cleanly "trampoline" the stack pointer to the function so that
 * recursion can be efficient.
 */

// Tail-recursive version
function factorialTailRecursive(n, accumulator = 1) {
    // Base case: If n is 1, return the accumulator
    if (n === 1) {
        return accumulator;
    }
    // Tail-recursive call with updated accumulator
    return factorialTailRecursive(n - 1, n * accumulator);
}
console.log(factorialTailRecursive(10)); // This will log: 3628800
