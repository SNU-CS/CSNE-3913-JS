/**
 * These examples use the traditional CommonJS format for Node.js module
 * imports. Note that using the ECMAScript (Web) module format is an emerging
 * trend in Node.js projects. You are free to do this, but you will need to name
 * your files with the .mjs extension (or provide the appropriate setting in
 * your package.json file) for this to work.
 */

// Import one of our own classes (Human).
const Human = require("./12 classes.js");

// Do something with the Human class
const bob = new Human("Bob", 55);
console.log(bob.name);

/**
 * Your turn: take one of the files you wrote earlier and export a function or
 * class. Now, import that into this file and use it here. Try using some of the
 * code from the file that you didn't specifically import. Does it work? Why?
 **/
