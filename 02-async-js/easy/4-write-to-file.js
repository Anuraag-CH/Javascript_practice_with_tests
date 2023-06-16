// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

function printFile(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File written successfully.");
}

const data = "hi there";

fs.writeFile('test_file.txt', data, 'utf8', printFile);
