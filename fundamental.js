const name = "Sabbir";

let age  = 25;
age = 30;

let country = "Bangldesh";


// console.log("My name is " + name + ". I am " + age + " years old. I live in " + country + ".");

// console.log(typeof "Rakib");
// console.log(typeof 12);
// console.log(typeof true);

var userName = "Rakib";
var userName = "Sabbir";



let anotherName = "Ritu";
// let anotherName = "Rina"; // SyntaxError: Identifier 'anotherName' has already been declared
// let cannot redeclare same variable with let or const in the same scope. However, var allows redeclaration.

// console.log(userName);
// console.log(anotherName);


// Block scope with let and const:

if(true) {
    let blockScopedVariable = "I am block scoped";
    const blockScopedConstant = "I am also block scoped";

    // console.log(blockScopedVariable); // Accessible here
    // console.log(blockScopedConstant); // Accessible here    
}

blockScopedVariable = "Trying to change constant"; 
// console.log(blockScopedVariable); 


//   console.log(blockScopedVariable); // Accessible not avaiable form here
//   console.log(blockScopedConstant); // Accessible not avaiable form here   


// let and const are different from var in terms of scope. Variables declared with let and const are block-scoped, meaning they are only accessible within the block they are defined in. In contrast, var is function-scoped or globally scoped if declared outside a function, which can lead to unexpected behavior if not managed carefully.



// oprator 

let x = 10;
let y = 5;  


const a = 10;
const b = 5;

const sum = a + b + " Sum "; // Addition

// console.log("Sum:", sum); // Output: Sum: 15

// console.log(typeof sum); // Output: string

// console.log(x + y); // Addition
// console.log(x - y); // Subtraction
// console.log(x * y); // Multiplication
// console.log(x / y); // Division
// console.log(x % y); // Modulus    


const table =[ "water", "food", "clothes", "shoes"];

// console.log(typeof table); // Output: object


const person = {
    name: "Sabbir",
    age: 25,
    country: "Bangladesh"
};      

// console.log(typeof person); // Output: object


// Functions in JavaScript are blocks of code designed to perform a particular task. They can take inputs, called parameters, and can return an output. Functions help in organizing code, making it reusable, and improving readability.

const greet = function(name) {
    return "Hello, " + name + "!";
}   

// console.log(greet("Sabbir")); // Output: Hello, Sabbir!

function number(a,b){
    const add = a*b;
    // console.log(add)
}

number(10, 15)



function schedule(name , time){
    const sleepingTime = (time + "is "+ name + " sleeping time")

    const totalSentense = (`${name} + ${time}`)
    // console.log(sleepingTime, totalSentense)
}

schedule('sabbir', '9Pm,')
schedule('Rakib', '11Pm,')
schedule('Sajjad', '12Pm,')



// object 

// function Person(first, last, age, eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eyecolor;
//   this.fullName = function() {
//     return this.firstName + " " + this.lastName;
//   };
// }

// new way to learn java script 

// alert("Hello java script")

// Object

const user = {
    name : "Rahul",
    age:25,
    status: "follower",
    issFollow: true
}

const fullName = user.name;

// change object value 

user["name"] = "kamal"
user['age'] = user['age'] + 1;

console.log(user)


