const fs = require("fs");
const fsp = require("fs").promises;
const http = require("http");

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
        const data1 = fs.readFileSync("README.md", "utf8");
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
        const data1 = await fsp.readFile("README.md", "utf8");
        console.log(data1);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

readFilesAsync();

// Utility function to fetch website content
function fetchWebsite(url) {
    // Returning a Promise allows us to use this function in an async context
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
            });
            res.on("end", () => resolve(data));
        }).on("error", (err) => reject(err));
    });
}

// Asynchronous website downloading
async function downloadAndLogWebsites() {
    const url = "http://example.com";
    for (i = 0; i < 3; i++) {
        try {
            // wait for the Promise to resolve
            const data = await fetchWebsite(url);
            console.log(`Website ${i + 1} content:\n`, data);
        } catch (error) {
            console.error(`Error fetching website ${i + 1}:`, error);
        }
    }
}

downloadAndLogWebsites();
