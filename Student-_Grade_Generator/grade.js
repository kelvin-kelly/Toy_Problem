//import the readline
const readline = require('readline');
//declare a variable called read  and create an interface
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// create a function
function gradeCalculated(marks) {

    /**
     * - A > 79
- B - 60 to 79
- C - 59 to 49
- D - 40 to 49
- E - less than 40.
     */
//declare a variable grade to store our Grade it will receive a value from input
//makes intention clearer
 let grade = null ;
    

//using switch case to work the if else statements since multiple values need to be true

    switch (true) {
        case marks > 79 && marks <= 100:
            grade = "A";
            break;
        case marks >= 60 && marks <= 79:
            grade = "B";
            break;
        case marks >= 50 && marks <= 59:
            grade = "C";
            break;
        case marks >= 40 && marks <= 49:
            grade = "D";
            break;
        case marks >= 0 && marks < 40:
            grade = "E";
            break;
        default:
            grade = "Invalid input. Marks should be between 0 and 100.";
    }

    return grade;
}
//inside the read callback function, we parse the input as an integer using parseInt() and then use the calculateGrade() function to determine the grade.

read.question("Enter student marks (between 0 and 100): ", function(marks) {
    marks = parseInt(marks);

//use if to see if marks is less than 0 or grater than 100 
//isNaN to check if it is a number 
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Marks should be between 0 and 100.");
    } else {
        const grade = gradeCalculated(marks);
        console.log("Grade:", grade);
    }
//close the readline interface
    read.close();
});