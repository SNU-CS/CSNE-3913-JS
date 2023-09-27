// Trivial example of a linked list (from Eloquent JavaScript, 3ed)
const listA = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
        },
    },
};

// Another linked list
const listB = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
        },
    },
};

// Are they strictly equal?
console.log(listA === listB);

/**
 * JavaScript does not have built-in methods for deep comparison of objects or
 * arrays. See file 10 for an example of how to actually deeply compare objects
 * using a third-party package.
 */
