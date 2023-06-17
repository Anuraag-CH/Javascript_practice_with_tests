// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)





function printCounter() {

    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    console.clear()
    console.log(`${hours}:${minutes}:${seconds}`);
    setTimeout(printCounter, 1000);

}






function printCounter2() {

    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    let ampm = '';

    if (hours >= 12) {
        ampm = 'PM';
        hours = hours - 12
    } else {
        ampm = 'AM';
        if (hours === 0) {
            hours = 12;
        }
    }
    console.clear()
    console.log(`${hours}:${minutes}:${seconds} ${ampm}`);

    setTimeout(printCounter2, 1000);
}


setTimeout(printCounter2, 1000);