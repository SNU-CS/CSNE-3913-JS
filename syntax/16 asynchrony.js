const fs = require("fs");
const fsp = require("fs").promises;

/**
 * You will need to run this file from the root directory, as follows:
 *
 *      node syntax/16\ asynchronicity.js
 *
 * This way, file paths will correctly resolve.
 */

// Synchronous example
function readFiles() {
    try {
        // With large or numerous files ths would be very slow!
        const data1 = fs.readFileSync("LICENSE", "utf8");
        console.log(data1);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

readFiles();

// Asynchronous example (ES2017+)
async function readFilesAsync() {
    try {
        // We can only use `await` in functions marked `async`
        const data1 = await fsp.readFile("LICENSE", "utf8");
        console.log(data1);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

readFilesAsync();

/**
 * In earlier versions of JavaScript, it was common to nest "callback" functions
 * to run when a condition was met or when an exception was raised. This would
 * quickly devolve into an anti-pattern called "The Pyramid of Doom".
 *
 * Here is a trivial example that attempts to read a file, resorting to backup
 * files if the first file is not present. These callback chains are hard to
 * read, as code will execute out of order depending on the errors raised.
 */

fs.readFile("file1.txt", "utf8", function (err, data1) {
    if (err) {
        console.error("Error reading file1:", err);
        fs.readFile("file2.txt", "utf8", function (err, data2) {
            if (err) {
                console.error("Error reading file2:", err);
                fs.readFile("file3.txt", "utf8", function (err, data3) {
                    if (err) {
                        console.error("Error reading file3:", err);
                        // And so on...
                    } else {
                        console.log("File3 contents:", data3);
                    }
                });
            } else {
                console.log("File2 contents:", data2);
            }
        });
    } else {
        console.log("File1 contents:", data1);
    }
});

/**
 * The first solution to the callback solution was the use of Promises. Promises
 * are like prototypes in that they are still used behind-the-scenes, even
 * though we have better syntax today. Promises are worth understanding.
 */

// This function returns a Promise
function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// Using a Promise
readFilePromise("LICENSE")
    // We will still encounter some nesting if we attempt to read multiple files
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error("Error reading file:", err);
    });

/**
 * Now go back to the top of the file and look at the async/await example.
 *
 * This syntax was introduced to make it easier to think about asynchronous
 * code.  Although it is asynchronous, the use of the `await` keyword reads very
 * similarly to synchronous code. As long as we are aware that things may happen
 * out of order, this code is easier to read.
 */

// Bonus: problems in asynchronous code
async function loadFileBuggy(filePath) {
    try {
        // HEISENBUG: Forgot to 'await' readFile
        const data = fs.readFile(filePath, "utf-8");
        console.log(data); // Will log a Promise object... sometimes
    } catch (error) {
        console.error("Error:", error.message);
    }
}

loadFileBuggy("README.md");
