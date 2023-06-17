// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs")

function fileRead(err, data) {
    if (err) {
        console.log(err)
        return
    }
    data = transformFileData(data)
    fs.writeFile('test_file.txt', data, 'utf8', fileWrite)
}

function transformFileData(data) {

    data = data.split(' ')
    cleaned_data = []

    for (i = 0; i < data.length; i++) {

        if (data[i].length != 0) {
            cleaned_data.push(data[i])
        }
    }

    cleaned_data = cleaned_data.join(' ')

    return cleaned_data
}

function fileWrite(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File written successfully.");
}

fs.readFile('test_file.txt', 'utf8', fileRead)

