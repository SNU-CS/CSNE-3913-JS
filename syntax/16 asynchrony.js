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

// Asynchronous example
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
