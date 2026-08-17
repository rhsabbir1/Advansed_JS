const name = "Sabbir";

let age = 25;
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

if (true) {
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


const table = ["water", "food", "clothes", "shoes"];

// console.log(typeof table); // Output: object


const person = {
    name: "Sabbir",
    age: 25,
    country: "Bangladesh"
};

// console.log(typeof person); // Output: object


// Functions in JavaScript are blocks of code designed to perform a particular task. They can take inputs, called parameters, and can return an output. Functions help in organizing code, making it reusable, and improving readability.

const greet = function (name) {
    return "Hello, " + name + "!";
}

// console.log(greet("Sabbir")); // Output: Hello, Sabbir!

function number(a, b) {
    const add = a * b;
    // console.log(add)
}

number(10, 15)



function schedule(name, time) {
    const sleepingTime = (time + "is " + name + " sleeping time")

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
    name: "Rahul",
    age: 25,
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


if (storeTaka > 20) {
    // console.log("You can buy this book")
}
else {
    // console.log("You need earn money")
}

let mode = "light";
let color;

if (mode === "light") {
    color = "white"
}
else if (mode === "Dark") {
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


let yourNumber = 5;


let grade;

if (yourNumber <= 100 && yourNumber >= 90) {
    grade = "Your grade is A+";
} else if (yourNumber <= 89 && yourNumber >= 80) {
    grade = "Your grade is A";
} else if (yourNumber <= 79 && yourNumber >= 70) {
    grade = " Your grade is B+"
} else if (yourNumber <= 69 && yourNumber >= 60) {
    grade = " Your grade is B"
} else if (yourNumber <= 59 && yourNumber >= 50) {
    grade = " Your grade is C+"
} else if (yourNumber <= 49 && yourNumber >= 40) {
    grade = " Your grade is C"
} else if (yourNumber <= 39 && yourNumber >= 33) {
    grade = " Your grade is F"
} else (
    grade = "Enter e valid number"
)


// console.log(grade)


// java script loop
// for loop

for (let count = 1; count <= 10; count++) {
    // console.log("For loop")
}

// console.log("For loop is stoped")


// calculate 1 to  5th number 

let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}

// console.log(sum)


// calculate 1 to nth number 

let sum1 = 0;
let n = 2;

for (let i = 1; i <= n; i++) {
    sum1 = sum1 + i
}

// console.log(sum1)
// while loop
// do while loop


// for of for loop 

// only Array

let str = "Anything";
let length = 0;

for (let name of str) {
    length = length + 1;
    // console.log(name)
}

// console.log(length)

const studentName = 'Arafat Ullash';
let studentNameLength = 0;

for (let length of studentName) {
    // console.log(length)
    studentNameLength++;
}

// console.log(studentNameLength)


// Create an Object
const Sperson = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in Sperson) {
    // console.log(Sperson[key])
}


// 1 to 100 even number 
// even number 
for (let num = 0; num <= 100; num++) {
    if (num % 2 == 0) {
        // console.log(num + "The number is even number")
    }
}


// odd number 
for (let num = 0; num <= 100; num++) {
    if (num % 2 !== 0) {
        // console.log(num + "The number is odd number")
    }
}

// let rightNumber = 25;
// // let userInput = prompt("Please gase the number");
// let userInput = 1;


// while(userInput != rightNumber){
//     // userInput = prompt("Your number is wrong. Please send again")
// }

// console.log("Your provide number is right")


// js String

let string = "Apna collage";

const count = string.length;
const fourthletter = string[3];

// console.log(count +" " + fourthletter);


// js strings method or function

const upperCase = string.toLocaleUpperCase()
const lowwerCase = string.toLocaleLowerCase()


// console.log(upperCase)

//  Array 

let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits[0] = "Painapple";

// console.log(fruits)
// console.log(firstItem)
for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i])
}

for (let furit of fruits) {
    // console.log(furit)
}

let marks = [85, 90, 75, 60, 100];
let sumOFmarks = 0;


for (let mark of marks) {
    sumOFmarks += mark;
}

const avarageMark = sumOFmarks / marks.length;
// console.log(`${sumOFmarks} is main marks and avarage marks is ${avarageMark}`)let prices = [250, 645, 300, 900, 50];

let prices = [250, 645, 300, 900, 50];

for (let i = 0; i < prices.length; i++) {
    let offer = prices[i] / 10;
    prices[i] = prices[i] - offer;
}

// console.log(prices);


// Function and method ]

function newfunction() {
    // console.log("apne collage")
}

newfunction()


function reusableFunction(userText) { //userText's called paramiter
    // console.log(userText)
}

// let userText = prompt("Please write something")
let userText = "Hello js";
reusableFunction(userText); // this userText call is arguments


// addition twoNUmber

function addNumber(num1, num2) {
    const sum = num1 + num2;
    // console.log(sum)
}

const e = 10;
const f = 5;
addNumber(e, f)


// return 

function add_Number(a, b) {
    let sum = a + b;
    return sum;
}

const add_numerb = add_Number(5, 6);
// console.log(add_numerb)


// morder js arrow function

const sum2 = (a, b) => {
    console.log(a + b)
}


// console.log(sum2(1,2))

// counst vowel

function countVowel(str) {
    let count = 0;
    for (let letter of str) {
        if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
            count++;
        }
    }



    console.log(count)
}

// countVowel("Sabbir")


// with arrow function 

const countvow = (str) => {
    let count = 0;
    for (let letter of str) {
        if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
            count++;
        }
    }

    return count;
}


const countVowe_L = countvow("aeiou")
// console.log(countVowe_L)