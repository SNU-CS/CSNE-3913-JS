/**
 * The code that follows is an evaluator for a very simple programming language.
 * The evaluator stores variables in an object that represents the environment.
 * It can then look up stored values to perform simple arithmetic calculations.
 */
function evaluate(expression, environment = {}) {
    const tokens = expression.split(/ *([+\-*/=]) */);

    // Check for simple assignments
    if (tokens[1] === "=") {
        const variable = tokens[0];
        const valueExpression = tokens.slice(2).join("");
        environment[variable] = evaluateArithmetic(
            valueExpression,
            environment,
        );
        return environment[variable];
    } else {
        // Full arithmetic expression
        return evaluateArithmetic(expression, environment);
    }
}

function evaluateArithmetic(expression, environment) {
    const tokens = expression.split(/ *([+\-*/]) */);

    const left = isNaN(parseInt(tokens[0]))
        ? environment[tokens[0]]
        : parseInt(tokens[0]);

    // Check if the expression is a single number or a variable
    if (tokens.length === 1) return left;

    const operator = tokens[1];
    const right = isNaN(parseInt(tokens[2]))
        ? environment[tokens[2]]
        : parseInt(tokens[2]);

    switch (operator) {
        case "+":
            return left + right;
        case "-":
            return left - right;
        case "*":
            return left * right;
        case "/":
            return Math.floor(left / right);
        default:
            throw new Error(`Unknown operator: ${operator}`);
    }
}

const env = {}; // environment that we can re-use
console.log(evaluate("x = 5", env)); // stores x in the environment
console.log(evaluate("y = x + 3", env)); // uses stored value of x
