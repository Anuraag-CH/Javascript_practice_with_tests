// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 0;

function printCounter() {
    console.clear()
    console.log(counter);
    counter += 1;

    // Call setTimeout again after a delay
    setTimeout(printCounter, 1000);
}

// Start the counter
setTimeout(printCounter, 1000);
