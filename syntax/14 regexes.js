/**
 * RegExes let us extract, search, replace, and validate text by use of patterns.
 *
 * Note that the RegExes below aren't the canonical solutions to these problems.
 * Those RegExes would likely be far more complex. However, sometimes simplicity
 * is better (you might not know all the rules for valid email addresses, for
 * example). The RegExes below represent a simplicity-first approach upon which
 * we can build for more complex pattern matching later.
 *
 **/

// extract email address
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log(emailRegex.test("test@example.com")); // should return true
console.log(emailRegex.test("invalid_email@com")); // should return false

// extract phone number
const simplePhoneRegex = /^(\d{10}|\d{3}[-.]\d{3}[-.]\d{4})$/;

console.log(simplePhoneRegex.test("405-555-5555")); // should return true
console.log(simplePhoneRegex.test("400332aaaaaa")); // should return false

// extract every instance of the names Carol, Carlos, and Carl
const namesRegex = /\b(?:Carol|Carlos|Carl)\b/gi;

// extract all binary numbers
const binaryRegex = /\b[01]+\b/g;

// dates in MM-DD-YYYY or MM/DD/YYYY formats
const dateRegex = /\b\d{2}[-/]\d{2}[-/]\d{4}\b/g;

// passwords that are 8 characters long, one lowercase and uppercase letter
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

// extracting hashtags from a tweet
const hashtagRegex = /#\w+/g;

// extracting URLs from text
const urlRegex = /https?:\/\/[^\s]+/g;

// validating a single postal code
const zipCodeRegex = /^\d{5}(-\d{4})?$/;

// extracting image file names
const imageFileRegex = /\b[\w/-]+\.(jpg|jpeg|png|gif)\b/g;

// extracting decimal numbers from text
const decimalRegex = /\b\d+\.\d+\b/g;
