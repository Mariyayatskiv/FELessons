// let user = new Object();
// let user = {};

// console.log(user.name, user.age)

// user.role = "user"
// console.log(user)

// delete user.role

// console.log(user.name, user["name"])
// user["test.city"] = "manager"
// user["user role"] = "manager"
// console.log(user)

// delete user["user role"]

// console.log(user.name === undefined)
// console.log(user.test === undefined)

// let test = prompt("Enter key")

// if(test in user) {
//     console.log("Exist")
// }
//  else {
//     console.log("Not exist")
// }
// console.log("name" in user)


// console.log("test" in user)
// console.log("bla" in user)

// console.log(user)
// console.log('-------')
// for (key in user) {
    // "Ivan" - 1
    // 30
    // "Lviv"
    // undefined
    // "user"
//     if(key === "name") {
//         // user.name = "Vasyl"
//         // user["name"] = "Vasyl"
//         // user[key] = "Vasyl"
//         user[key] = "Vasyl"
//         console.log(user)
//     }
//     console.log(key, user[key])
// }
// console.log('-------')
// console.log(user)

// console.log(user.bla)

// if("role" in user) {
//     if(user.role === "user") {

//     } else if(user.role === "manager") {

//     } else if(user.role === "admin") {

//     }
// // }

// let userName = "Ivan"
// let customerName = userName;

// console.log(userName, customerName)

// userName = "Vasyl"
// customerName = userName;
// console.log(userName, customerName)

// let user = {
//     name: "Ivan",
//     age: 30,
//     "test.city": "Lviv",
//     test: undefined,
//     role: "user"
// }

// let customer = user

// console.log(user, customer)

// user.name = "Vasyl"
// console.log(user, customer)


// let user = {
//     name: "Ivan",
//     age: 30
// }

// let user1 = {
//     name: "Maria",
//     city: "Lviv"
// }

// let customer = {}

// for(let key in user) {
//     customer[key] = user[key]
// }

// console.log(customer, user)
// user.name = "Vasyl"
// console.log(customer, user)

// Object.assign(customer, user1, user)

// console.log(customer, user1, user)
// user.name = "Vasyl"
// console.log(customer, user)

// let a = {},
//     b = a

// console.log(a == b)
// console.log(a === b)

// const user = {
//     name: "Ivan",
//     age: 30
// }
// // user = {}
// user.name = "Dmytro"
// delete user.name
// delete user.age

// user.name = "Dmytro"
// user.age = 16
// user.role = "user"

// console.log(user)

// let user = {
//     name: "Ivan",
//     age: 30,
//     // sayHi: function() {
//     //     console.log(user.name) // Ivan
//     //     console.log(this.name) // Ivan
//     // }
// }

// let customer = {}
// Object.assign(customer, user)
// delete user.name
// customer.name = "Dmytro"
// customer = {
//     name: "Dmytro",
//     age: 30,
//     sayHi: function() {
//         console.log(user.name) // Ivan
//         console.log(this.name) // Dmytro
//     }
// }


// console.log(customer, user)
// customer.sayHi()


// user.sayHi = function () {
//     console.log('Hi!')
// }


// function sayHi() {
//     console.log(this)
// }
// sayHi()

// let sayHello = () => {
//     console.log(this)
// }
// sayHello()

let user = {
    name: "Ivan",
    age: 30
}

let customer = {
    name: "Dmytro",
    city: "Lviv"
}

function sayHi() {
    console.log(this.name)
}

user.sayHi = sayHi;
user.sayHi() // Ivan

customer.sayHi = sayHi;
customer.sayHi() // Dmytro