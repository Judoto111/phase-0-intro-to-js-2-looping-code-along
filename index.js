// Code your solutions in this file
// Function to write thank you cards for each name in the array
function writeCards(namesArray, eventName) {
    let thankYouMessages = []; // Array to hold the messages

    for (let i = 0; i < namesArray.length; i++) {
        let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
        thankYouMessages.push(message);
    }

    return thankYouMessages;
}

// Example usage:
let names = ["Alice", "Bob", "Charlie"];
let event = "birthday";

let messages = writeCards(names, event);

// Output the messages
messages.forEach(message => {
    console.log(message);
});
// Function to count down from a positive integer to zero
function countDown(startingNumber) {
    // Check if the input is a positive integer
    if (typeof startingNumber !== 'number' || startingNumber <= 0) {
        console.log("Please provide a positive integer greater than zero.");
        return;
    }

    // Start counting down from startingNumber
    for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
    }
}

// Example usage:
countDown(10); // Will count down from 10 to 0