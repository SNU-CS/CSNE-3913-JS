import { expect, test } from "vitest";
import { emailValidator } from "./example_email_validator.js";

/**
 * You can run the testing program (Vitest) from the command line with:
 *
 *     npx test
 *
 * The code in our package.json file assigns the name `test` to the vitest
 * executable included when we installed the package.
 *
 * The test runner will continuously watch our files for changes. To exit the
 * test runner, we can hit Ctrl+C, which will stop the testing process.
 */

// Testing that invalid emails do not pass our filter
test("filters bad email addresses", () => {
    expect(
        emailValidator([
            "rob.gering@snu.edu", // Each of these emails is a "test case"
            "@meexample.com@com",
            "bademailwithnoatsign",
            "12123412124125151231",
            "some@example.com",
            "me@example.com",
        ]),
    ).toStrictEqual([
        "rob.gering@snu.edu",
        "some@example.com",
        "me@example.com",
    ]);
});
