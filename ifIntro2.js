//Write a program that takes a students score as input and prints their grade based on the following scale:

//Score	Range	Grade
//90-100       	A
//80-89	        B
//70-79	        C
//60-69	        D
//0-59	        F

//Example input and output:

//Input: 85 (student's score)

//Output: Grade: B


//Step 1: Get the students score
//const score = ("Enter your score (0-100):"); 


let score = 90; {
    console.log("Youre score is: "+ score);
}


//Step 2: Check the grade using if-else
if (score >= 90 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 80 && score < 90) {
    console.log("Grade: B");
} else if (score >= 70 && score < 80) {
    console.log("Grade: C");
} else if (score >= 60 && score < 70) {
    console.log("Grade: D");
} else if (score >= 0 && score < 60) {
    console.log("Grade: F");
}

else if (score < 0 || score > 100) {
    console.log("Error: Invalid input. Please enter a number between 0 and 100.");
} else {
    console.log("Your score is: " + score);
}
