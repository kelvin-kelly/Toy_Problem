// Create readline interface

const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//call a function for points demerits 
// Function to calculate demerit points
function pointDemerits(speed) {
    // Speed limit declaration
    const speedLimit = 70;

    // For every km/hr passed after the speed limit
    const kmPerPointDemerit = 5;

    // Represents the points demerit for license suspension (12 points).
    const licenseSuspension = 12;

    switch (true) {
        case (speed <= speedLimit):
            return "Ok";
        default:
            const demeritPoints = Math.floor((speed - speedLimit) / kmPerPointDemerit);
            if (demeritPoints > licenseSuspension) {
                return "License suspended";
            } else {
                return "Points: " + demeritPoints;
            }
    }
}

// Prompt user to input speed
rl.question("Enter your speed (in km/hr): ", (speedInput) => {
    const speed = parseFloat(speedInput);
    // Check if the input is valid
    if (!isNaN(speed)) {
        // Call pointDemerits function with user input
        console.log("You are going at " + speed + " km/hr\nYou have received, \n" + pointDemerits(speed) + " as Demerits point");
    } else {
        console.log("Invalid input. Please enter a valid number for speed.");
    }
    // Close the readline interface
    rl.close();
});

