// This example is taken directly from Eloquent JavaScript 3ed.

// Chicken calls egg
function chicken() {
    return egg();
}

// Egg calls chicken
function egg() {
    return chicken();
}

// Infinite recursion causes a stack overflow!
console.log(`${egg()} came first?`);
