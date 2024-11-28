// Numbers:
let firstNumber = 56;
let secondNumber = 48;

//let result = (firstNumber + secondNumber);

// Strings:
let firstName = "Shirley";
let lastName = "Kalay";
let fullName = firstName + " " + lastName;

//arrays:
let teamMembers=["Sara", "Elisabeth","Sunniva"]
let statistics=[1, 7, 98, 56, -6, 48, 9, 0];

//size of an array:
let teamMembersSize=teamMembers.length;
console.log("team members: "+teamMembersSize);

//get an random member between 0 and teammembersSize:
let randomMemberIndex = Math.floor(Math.random() * teamMembersSize);

//get the memeber
console.log(teamMembers[randomMemberIndex]);

//let ur create a random number
let randomNumber= Math.floor((Math.random()*1000000));
console.log("---------------", randomNumber);
console.log["teamMembers[anyMember]"];


//define a y element and redefine again
//let result2=statistics[3]+statistics[5];
//console.log(result2);
//y=560;


// Booleans:
let isSnowing = false;
let isRaining = true;
let isSunny = false;

const myBirthYear = 1986
console.log(myBirthYear);

//objects:
let car= {
    "wheels": 4,
    "doors": 4,
    "color": "red",
    "make": "Honda",
    "model": "Civic",
    "year": "2008"
}

let jacket= {
    "name":"winter jacket",
    "color":"navy blue",
    "size":"medium",
    "brand":"Holzweiler",
    "season":"winter",
    "overmaterial":"100% polyester",
    "material fill":"goose feather",
    "type":"knee-high",
    "price":"8000 kr",
    "state":"new"
}
console.log("Selling my",jacket.state, jacket.type,jacket.name, "from", jacket.brand, "for", jacket.price)

let person= {
    "name":"Molly",
    "age":"27",
    "gender":"female",
    "date of birth":"1997-05-01",
    "hometown":"Malmo",
    "hobbies":"yoga, hiking, riding",
    "occupation":"yoga instructor",
}

console.log("Her name is", person.name, "and she is", person.age, "years old.", "She works as a", person.occupation, "and her hobbies are", person.hobbies)


  //eksponenter
  //let result1=12**3; //2*2*2

  //console.log(result);

  //let result=8**3;

  //console.log(result);

 //modus
  //let myNumber=656646648397%5;
  //let myNumber1=656646648397%7;
  //let myNumber2=656646648397%12;


  //console.log(myNumber); 
  //console.log(myNumber1); 
  //console.log(myNumber2);

  let friendslist = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hank",
    "Ivy",
    "Jack",
  ]

  console.log(friendslist);

  //new fridnds
  friendslist.push("Lily")
  friendslist.push("Molly")
  console.log(friendslist);

  //remove Frank from the list
  friendslist.splice(5,1)
  console.log(friendslist);

  friendslist.push("Daniel")
  console.log(friendslist);

  friendslist.pop();
  console.log(friendslist);

//CRUD - Create, Read, Update, Delete

//Joe earns 30000 NOK per month and he pays 30% tax. Assign the variables to the correct values.
let joeSalary = 30000;
let joeTax = 0.3;
let joeNetSalary = joeSalary * (1 - joeTax);

console.log(joeNetSalary);

let joeBruttoSalary=30000;
let JoeMonthlyTaxRate=0.3;
let joeMonthlyTax=joeBruttoSalary*JoeMonthlyTaxRate;
let joeNettoSalary=joeBruttoSalary-joeMonthlyTax;

console.log(joeNettoSalary);

let joeData= `joe brutto salary : ${joeBruttoSalary}, joe monthly tax: ${joeMonthlyTax}, joe netto salary: ${joeNettoSalary}`;

console.log(joeData);




//Emma spends 2000 NOK for groceries for 1 week. What is er yearly cost for groceries?

//weekly spending
let emmaGroceries=2000;

//Number of weeks in a year
let weeksInAYear=52;

//yearly spending
let emmaYearlySpending= emmaGroceries*52;


let emmaData= `Emma spends: ${emmaGroceries} NOK on groceries for a week, number of weeks in a year: ${weeksInAYear}, Emma yearly spending: ${emmaYearlySpending}`;


console.log(emmaData);
