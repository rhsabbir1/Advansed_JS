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

// let x = 10;
// let y = 5;  


// const a = 10;
// const b = 5;

// const sum = a + b + " Sum "; // Addition

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

// console.log(user)


// chapter two condation or oparator

// commnt _ learn how to comment code for remainder

// Arithmatic oparator

// let fa = 5;
// let fb = 9;

// console.log( fa+ fb)

let a = 10;
let b = 5;

let result = a + b;


// console.log(a + b); // 13
// console.log(a - b); // 7
// console.log(a * b); // 30
// console.log(a / b); // 3.333...
// console.log(a % b); // 1
// console.log(a ** b); // 1000

// console.log(result); // 15

let storeTaka = 10;


if(storeTaka > 20){
    // console.log("You can buy this book")
}
else{
    // console.log("You need earn money")
}

let mode = "light";
let color;

if(mode === "light"){
    color = "white"
}
else if(mode === "Dark"){
    color = "Black"
}

// console.log(color)

// let yourNumber = prompt("Enter Your Number")

// // let setname = document.getElementById('name1')

// // setname.innerText = yourNumber;
// document.getElementById('name1').innerText = yourNumber;
// if(yourNumber % 2 == 0){
//     console.log("Your number is even number")
// }else{
//     console.log("Your number is odd number")
// }

// console.log(yourNumber)


let yourNumber = prompt("Enter Your Number")


let grade;

if(yourNumber <= 100 && yourNumber >= 90){
    grade = "Your grade is A+";
}else if(yourNumber <=89 && yourNumber >= 80){
    grade = "Your grade is A";
}else if(yourNumber <= 79 && yourNumber >= 70){
    grade = " Your grade is B+"
}else if(yourNumber <= 69 && yourNumber >= 60){
    grade = " Your grade is B"
}else if(yourNumber <= 59 && yourNumber >= 50){
    grade = " Your grade is C+"
}else if(yourNumber <= 49 && yourNumber >= 40){
    grade = " Your grade is C"
}else if(yourNumber <= 39 && yourNumber >= 33){
    grade = " Your grade is F"
}else(
    grade = "Enter e valid number"
)


// console.log(grade)