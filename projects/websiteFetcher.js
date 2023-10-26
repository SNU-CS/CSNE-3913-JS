const http = require("http");

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
