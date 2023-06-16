/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/
function calculateTime(n) {
    // Record the starting time
    const startTime = new Date();

    // Calculate the sum from 1 to n
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    // Output the sum
    console.log(`Sum from 1 to ${n}: ${sum}`);

    // Record the ending time
    const endTime = new Date();

    // Calculate the time difference in milliseconds
    const timeElapsed = endTime - startTime;

    // Output the time elapsed in seconds
    console.log(`Time Elapsed for sum of ${n} numbers: ${timeElapsed / 1000}s`);
}

// Run the function for different values of n
calculateTime(100);
calculateTime(100000);
calculateTime(1000000000);
calculateTime(10000000000);

//output
// Sum from 1 to 100: 5050
// Time Elapsed for sum of 100 numbers: 0.005s
// Sum from 1 to 100000: 5000050000
// Time Elapsed for sum of 100000 numbers: 0.006s
// Sum from 1 to 1000000000: 500000000067109000
// Time Elapsed for sum of 1000000000 numbers: 1.084s
// Sum from 1 to 10000000000: 50000000000067860000
// Time Elapsed for sum of 10000000000 numbers: 10.878s