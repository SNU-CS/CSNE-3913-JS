// Here is a simple generator function that computes the base 2 logarithm
// of the natural numbers
function* log2Generator() {
    let n = 1; // begin with 1... this variable is closed over by the generator!
    while (true) {
        yield Math.log2(n); // yield indicates what is returned each generation
        n++; // increment the number for the next time the generator is called
    }
}

// Create our generator
const gen = log2Generator();

// Yield a few values
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
