// Import the Node.js events module (not in package.json)
// Documented here: https://nodejs.org/api/events.html
const EventEmitter = require("events");

// Here we define a custom event-emitting class, UserSystem, which extends
// EventEmitter to get the emit() method (this is inherited behavior)
class UserSystem extends EventEmitter {
    register(username) {
        // Simulate a user registration process with a delay
        setTimeout(() => {
            // Emit the `userRegistered` event after the delay
            this.emit("userRegistered", username);
        }, 1000); // 1 second delay
    }

    login(username) {
        // Simulate a user login process with a delay
        setTimeout(() => {
            // Emit the `userLoggedIn` event after the delay
            this.emit("userLoggedIn", username);
        }, 2000); // 2 second delay
    }
}

// Create an instance of UserSystem
const userSystem = new UserSystem();

// Listen for the `userRegistered` event and handle it
userSystem.on("userRegistered", (username) => {
    console.log(`${username} has registered successfully.`);
});

// Listen for the `userLoggedIn` event and handle it
userSystem.on("userLoggedIn", (username) => {
    console.log(`${username} has logged in successfully.`);
});

// Simulate user actions defined above
userSystem.register("Alice");
userSystem.login("Bob");

// Start an interval timer (output will interleave with the simulated user
// actions, above, because the JavaScript event loop allows *concurrency*, as
// we discussed in class)
const intervalId = setInterval(() => {
    console.log("Tick");
}, 1000);

// A timer that stops the "ticking" timer after three seconds have elapsed
setTimeout(() => {
    clearInterval(intervalId);
    console.log("BOOM!");
}, 3000);
