// Import the 'readline' module to interact with the user through the command line
const readline = require('readline');

// Create an interface to read input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define a function to determine the grade based on the provided marks
function studentMarks(marks) {
    // Check if the marks are within the valid range (0 to 100)
    if (marks > 100 || marks < 0) {
        console.log("The Marks should be between 0 and 100");
    } else {
        // Determine the grade based on specified ranges
        if (marks > 79) {
            console.log("Grade: A");
        } else if (marks >= 60 && marks <= 79) {
            console.log("Grade: B");
        } else if (marks >= 50 && marks <= 59) {
            console.log("Grade: C");
        } else if (marks >= 40 && marks <= 49) {
            console.log("Grade: D");
        } else {
            console.log("Grade: E");
        }
    }
}

// Ask the user to input their marks
rl.question('Enter your marks: ', (userInput) => {
    // Convert the user input to a floating-point number
    const marks = parseFloat(userInput);

    // Check if the input is a valid numeric value
    if (!isNaN(marks)) {
        // Call the function to determine the grade based on the entered marks
        studentMarks(marks);
    } else {
        console.log("Invalid input. Please enter a valid marks value.");
    }

    // Close the readline interface
    rl.close();
});
