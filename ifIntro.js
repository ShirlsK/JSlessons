
let time = 9;

if (time < 12){
    console.log("Good Mornig!");
} 
else{
    console.log("Good Afternoon!");
}

let isStudent = true;
if(isStudent){
    console.log("You are a student");
    }
    else{
        console.log("You are NOT a student");
    }

/*let age = 18;
let hasLicense = true;

if (age >= 18){
    console.log("You are old enough to drive!");
}
else{
    console.log("You must be 18+ to have a license");
}
if(hasLicense){
    console.log("You have your license");
}
else{
    console.log("You do not have your license yet");
}
*/

let age = 101;
if(age >= 100){
    console.log("You are TOO OLD to enter this site");
}
else if(age <0){
    console.log("Your age is not valid");
}
else if(age >= 18){
    console.log("You are old enough to enter this site");
}
else{
    console.log("You must be 18+ to enter this site");
}