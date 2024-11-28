let isSnowing=true;
let personName="Sara";
let personAge=12;

let saraObject={
    name:personName,
    age: personAge,
    isSnowing:isSnowing
}

//If it snows, Sara cannot come to school
if (saraObject.isSnowing==true) { //or just- (saraObject.isSnowing)

    console.log("Sara cannot come to school");
} else {
    console.log("Sara can come to school");
}

let aNumber=5;
aNumber=aNumber+25; //you can also use- (aNumber+=25)

//if i want to add one number to my aNumber:
aNumber=aNumber+1 //or
aNumber++;

//if shes under 18, she cannot drive a car
if (saraObject.age<18) {
    console.log("Sara cannot drive a car");
} else {
    console.log("Sara can drive a car");
}

 adminCredentials={
    username:"admin",
    password:"1234"
}

//if username is admin and password is 1234, she can log in
//else print out wrong username or password

if (adminCredentials.username==="admin" && adminCredentials.password==="1234") {
    console.log("You can log in");
} else {
    console.log("Wrong username or password");
}

//else if - 
//if a person is under 18. And the tax rate is 10% when peolple are between 18 and 30. 
//And the tax rate is 30% when people are over 30. And between 30 and 65, the tax rate is 40%.

let joeObject={
    name: "Joe",
    age: 65,
    income: 1000000
};

let taxRate=0;

//llet console out the starting init tax rate value
console.log(`${joeObject.name} tax rate is ${taxRate}`);

if (joeObject.age<18) {
    taxRate=0;
}else if (joeObject.age>=18 && joeObject.age<=30) {
    taxRate=0.1;
}else if (joeObject.age>=30 && joeObject.age<=65) {
    taxRate=0.3;
}else if (joeObject.age>65) {
    taxRate=0.4;
};

class Person {
    constructor(name, age, income) {
        this.name=name;
        this.age=age;
        this.income=income;
    }
    showNetto() {
        return this.income*(1-taxRate); 
    }
}

// create an instance
let Person= new Person("Henry", 65, 800000);
console.log(Person.showNetto());


//end og if block
console.log(`${joeObject.name} tax rate is ${taxRate}`);

//let console out the starting init tax rate value
let nettoIncome=joeObject.income*(1-taxRate);
console.log(`${joeObject.name} tax rate is now ${taxRate} and ${joeObject.name} net income is ${nettoIncome} NOK`);