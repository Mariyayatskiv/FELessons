// let arr = new Array()
// let arr = []

// let fruits = ["apple", 1, null, {name: "Ivan", age: 10}];
// fruits[1000] = "orange"

// console.log(fruits[3].name)

// let fruits = [
//     "apple", 
//     "orange", 
//     "banana", 
//     "pear"
// ];

// let arr = fruits;

// let arr = [
//     "apple", 
//     "orange", 
//     "banana", 
//     "pear"
// ]

// console.log(arr == fruits)
// console.log(fruits[0])
// console.log(fruits[fruits.length - 1])
// console.log(fruits.at(-1))

// console.log(fruits.shift())
// console.log(fruits)

// console.log(fruits.unshift("lemon", "lemon 2"))
// console.log(fruits)

// console.log(fruits.pop())
// console.log(fruits)

// console.log(fruits.push("apple 2", "apple 2"))
// console.log(fruits)


// function fruitsFunction() {
//     console.log(123)
// }

// let fruitsFunctionVar = function() {
//     console.log(123)
// }


// let fruits = [
//     "apple", 
//     "orange", 
//     "banana", 
//     "pear",
//     fruitsFunctionVar
// ];

// fruits[4]()

// fruits[5] = fruitsFunction
// fruits[5]()

// console.log(fruits)


// for(let i = 0; i < fruits.length; i++) {
//     console.log(i, fruits[i])
// }

// console.log('---------')

// for(let fruit of fruits) {
//     // console.log(typeof fruit, typeof fruit === 'number', typeof fruit == Number)
//     console.log(fruit - 1 !== NaN)
// }

// console.log('---------')

// for(let key in fruits) {
//     console.log(key, fruits[key])
// }



function fruitsFunction(a, b) {
    console.log(arguments)
    console.log(arguments[0])
    console.log(arguments.length)
}

// fruitsFunction(1, 5, 3, 3, 5)

// let fruitsFunctionVar = function() {
//     console.log(arguments)
//     console.log(arguments[0])
//     console.log(arguments.length)
// }

// fruitsFunctionVar(1, 5, 3, 3, 5)

// let fruitsArrow = (a, b) => {
//     console.log(arguments)
// }

// fruitsArrow(1, 4, 3, 2)

// delete fruits[4]


// console.log(fruits.splice(1, 1, "test 1", "test 2"))
// console.log(fruits)
// delete fruits[0]

// console.log(typeof fruits[0])
// [1, 3)

// let copiedFruits = fruits.slice(2)
// fruits[0] = 1

// console.log(fruits)
// console.log(copiedFruits)

// let array = [3, 4]

// let arr = fruits.concat(array, fruits.slice(2), 5, 6, 4)
// console.log(fruits)
// console.log(arr)


// for (let iterator = 0)

// fruits.forEach(function(fruit, fruitIndex, fruitArray) {
//     console.log(`item ${fruit} with position ${fruitIndex} in array ${fruitArray}`)
// })

// fruits.forEach((fruit, index, array) => {
//     console.log(fruit, index, array)
// })


// indexOf, lastIndexOf, includes

let fruits = [
    "apple", // 0
    "orange", // 1
    "banana", // 2
    "pear", // 3
];

// console.log(fruits.find(function(item, index, array) {
//     return item === "apple"
// }))

// // console.log(fruit)
// // if(fruit) {
    
//     fruits.splice(fruits.findIndex(item => item === "orange"), 1)
//     console.log(fruits)
// // }


//filter
// map
// sort
// reverse
// split
// join
// isArray

// let newFruits = fruits.map(item => item + " juice")
// console.log(fruits, newFruits)

// console.log(typeof {})
// console.log(typeof [])

// console.log(Array.isArray({}))
// console.log(Array.isArray(fruits))

// let shoppingList = []


// function shoppingItem(name, amount, inCart, price) {
//     shoppingList.push({
//         name: name,
//         amount: amount,
//         inCart: inCart,
//         price: price
//     })
// }

// shoppingItem('apple', 1, true, 100)
// shoppingItem('banana', 10, false, 50)

// function totalPrice() {

// }

// let string = 'test'
// console.log(string.charAt(0).toUpperCase() + string.slice(1))

// let array1 = [1, 2, 3]
// let array2 = [3, 3, 4, 5];
// let array3 = [...new Set([...array1,...array2])]
// console.log(array3)

// let array1 = [1, 2, 3]
// let array2 = [3, 3, 4, 5];
// let finalArray = [];
// // first concatenating two arrays.

// let array3 = array1.concat(array2);
// let length = array3.length;

// while (length--) 
// {
//   var item = array3[length];
//   if (finalArray.indexOf(item) === -1) 
//   {
//     finalArray.unshift(item);
//   }
// }
// console.log(finalArray)

// let array1 = [1, 2, 3]
// let array2 = [3, 3, 4, 5];

// let array3 = array1.concat(array2)
// let finalArray = array3.filter((item, idx) => array3.indexOf(item) === idx)
// console.log(finalArray)