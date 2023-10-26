/**
 * This is another example of a simple programming language. This one takes a
 * file written in its language as a parameter to the evaluator function.
 *
 * The language has three keywords, two of which accept a parameter:
 *
 *      PUSH    pushes its argument to the stack
 *      POP     removes and returns the last item on the stack
 *      DEL     removes its argument from the stack and returns the stack
 *
 * The language can accept a "file" consisting of an arbitrary number of
 * statements, each on their own line. We'll see why this matters below. In a
 * real programming language, other delimiters, like semicolons, indicate the
 * end of a statement, but for our simple language, a newline will suffice.
 */

// This is the script in our programming language to be evaluated
const commands = `
    PUSH 10
    PUSH 20
    PUSH 30
    PUSH 30
    PUSH 30
    POP
    PUSH 40
    DEL 30
    POP
`;

// The evaluator function
function evaluate(expression) {
    // The stack is just an array
    const stack = [];

    // Statements are just newlines
    const statements = expression
        .split("\n") // Hidden character representing a new line
        .filter((s) => {
            return s.trim() !== ""; // Remove empty lines
        })
        .map((s) => s.trim()); // Remove leading indentation

    // loop through the statements
    for (const c of statements) {
        // Split each statement into tokens
        const tokens = c.split(" ");
        // Switch on the first item, which should be a keyword
        switch (tokens[0]) {
            case "PUSH":
                // Push the item (convert to int first)
                stack.push(parseInt(tokens[1]));
                console.log(stack);
                break;
            case "POP":
                // Pop an item
                console.log(stack.pop());
                break;
            case "DEL":
                // Find and remove the first item that matches
                for (let i = 0; i < stack.length; i++) {
                    if (stack[i] === parseInt(tokens[1])) {
                        stack.splice(i, 1); // Remove the item at index i
                        break; // Exit the loop after removing the first match
                    }
                }
                console.log(stack);
                break;
            default:
                break;
        }
    }
}

evaluate(commands);
