// Requirements:
//
// Create a function that filters an array of strings to only include valid
// email addresses. Note: it's generally best to be permissive in what you
// accept as valid email! Many hours have been lost to email validation schemes
// that don't work.
function emailValidator(emails) {
    return emails.filter((email) => {
        // Our test: does the string under test contain two segments with the
        // "@" character between the segments? Note that an @ character at the
        // beginning or end of the string would be invalid in this scheme.
        if (email.split("@").length === 2) {
            return true;
        }
    });
}

// Array of emails that we want to test manually
const emailList = [
    "bob@example.com",
    "jim@example.com",
    "jornathoon",
    "@jornathoon@",
];

console.log(emailValidator(emailList));

// This CommonJS export allows us to import this function into our testing tool
exports.emailValidator = emailValidator;

// Challenge: can you rewrite the email validator to use a Regular Expression?
