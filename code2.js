const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPointsPer5Km = 1;
    const pointsThresholdForSuspension = 12;

    // Check if the speed is less than the speed limit
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        // Calculate demerit points
        const demeritPoints = Math.floor((speed - speedLimit) / 5);

        // Print the number of demerit points
        console.log(`Points: ${demeritPoints}`);

        // Check if the driver's license should be suspended
        if (demeritPoints > pointsThresholdForSuspension) {
            console.log("License suspended");
        }
    }
}

// Ask the user to input the speed
rl.question('Enter the car speed (in km/h): ', (userInput) => {
    // Convert the user input to a numeric value
    const speed = parseFloat(userInput);

    // Check if the input is a valid numeric value
    if (!isNaN(speed)) {
        // Call the function to check the speed and calculate demerit points
        speedDetector(speed);
    } else {
        console.log("Invalid input. Please enter a valid numeric speed value.");
    }

    // Close the readline interface
    rl.close();
});
