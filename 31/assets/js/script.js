// let userName = 'Ivan';

// function showMessage(message) {
//     let userName = 'Vasyl'
//     // let displayMessage = `Name, ${message} I'm here!`;
    
//     let displayMessage = userName + ", " + message + " I'm here!";
//     alert(displayMessage);

//     console.log(userName, 'from showMessage()')
// }

// console.log(userName)

// showMessage("Hello!"); //'Ivan'
// showMessage("Hi!"); //'Ivan'

// console.log(userName)
// let num1 = 5,
//     num2 = 10,
//     num3 = 100,
//     num4 = 200,
//     num5;

// function showMessage(from = 1, to = 1, next) {
//     from = '*' + from + '*';
//     alert(`From: ${from} to ${to} next: ${next}`)
// }

// let num1 = prompt('Enter from value:'),
//     num2 = prompt('Enter to value:');


// showMessage(prompt('Enter from value:'), prompt('Enter to value:'));
// showMessage(num1);
// showMessage(num5, num2, undefined);
// showMessage();

// function sum(a, b) {
//     if(a === 0 || b === 0) {
//         alert('Incorrect value!')
//         return;
//     }

//     alert(a + b);
//     console.log(a + b);

//     return a + b;
// }

// let result = sum(0, 3);
// console.log(result)
// console.log(sum(1, 3))

// let age = prompt('Enter your age', 18);

// function checkAge(age) {
//     if(age >= 18) {
//         return true;
//     } else {
//         return confirm('Do you have...?')
//     }
// }

// if(checkAge(age)) {
//     alert('Access')
// } else {
//     alert('Access deny')
// }

// function showMessage() {
//     alert("Hello!")
// }

// let sayHello = function () {
//     alert("Hello!")
// }

// setTimeout(function() {
//     alert('Text')
// }, 1000)

// function showMessage() {
//     alert('Text')
// }
// console.log(sayHello())



// function sum(a, b) {
//     return a + b
// }

// sum(1, 3)
// sum(2, 5)


// let sum = function(a, b) {
//     return a + b
// }


// let result = sum(3, 5);
// console.log(result);

// "use strict";
// let age = prompt("Enter your age"),
//     welcomeVar,
//     welcome;

// if(age < 18) {
//     // welcomeVar = welcome()

//     // function welcome() {
//     //     return "Hello!"
//     // }

//     // welcomeVar = welcome()
//     // console.log(welcomeVar, 'in function')
//     welcome = function() {
//         alert("Hello!")
//     }
// } else {
//     // welcomeVar = welcome()
//     // function welcome() {
//     //     return "Another Hello!"
//     // }
//     // console.log(welcomeVar, 'in function')
//     welcome = function() {
//         alert("Another Hello!")
//     }
// }
// console.log(welcomeVar)

// let age = prompt("Enter your age");


// let welcome = function() {alert(age < 18 ? "Hello!" : "Another Hello!")}

// welcome();

// let iterator = 0;

// function sum(a, b) {
//     return a + b + i
// }

// console.log(sum(1, 2))

// for(let i = 0; i < 3; i++) {
    
//     if(iterator > 0 && iterator < 2) {
//         amountOfIterationTrue ()
//     } else {
//         amountOfIterationFalse ()
//     }
//     iterator++
// }
// console.log(i)

// console.log(sum(1, 2))
// console.log(sum(1, 2))

// function generateID() {
//     return Math.floor(Math.random() * 1000)
// }

// console.log(generateID())
// console.log(generateID())
// console.log(generateID())

// function amountOfIterationTrue () {
//     alert('Text')
// }
// function amountOfIterationFalse () {
//     alert('Another Text')
// }

// console.log(iterator)

// (function() {
//     alert('Text')
// })()

// (function() {
//     alert('Text')
// }())
// "use strict";

// var user = 0;
// var user = 'Text';

// function showMessage() {
//     message = 'Text'
//     var message;
//     console.log(message)
// }

// (function() {
//     message = 'Text'
//     console.log(message)
// })()

// console.log(message)

// showMessage()

// let logMessage = () => console.log('Text')
// let logMessageNext = a => console.log(a)
// let sum = (a, b) => a + b

// let sum = (a, b) => {
//     return a + b
// }

// let totalSum = sum(1, 3)
// console.log(totalSum)

// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// }

// let sayHello = new Function('a', 'b', 'return a + b');
// let sayHello = new Function('a,b', 'return a + b');
// let sayHello = new Function('a , b', 'return a + b');

// console.log(sayHello(1, 2))
// let counterValue = 0

// function user() {
//     let name = 'Ivan',
//         sum = 5;

//     sum = sum + 2
//     console.log(sum)

//     return function displayName() {
//         sum = sum + 2
//         console.log(sum)
//     }
// }
// let ivan = user();
// ivan()

// let a = 5;

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(a, 10)) // 5, 10
// a = 10
// console.log(sum(a, 10)) // 10, 10


// function sum(a, b) {
//     return a + b
// }

// console.log(sum(1, 3))