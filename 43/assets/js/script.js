class Car {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }
    drive(speed) {
        this.speed = speed;
        console.log(`Speed is ${speed}`)
    }
    stop() {
        this.speed = 0;
        console.log('Stopped!')
    }
}

class Opel {
    constructor() {
        this.test = 123
    }
}

class Tesla extends Car {
    // drive(speed) {
    //     this.speed = speed;
    //     console.log('Test log')
    //     console.log(speed)
    // }
    drive(speed) {
        super.drive(speed);

        console.log('Test log')
        console.log(speed)
    }
}

let TeslaCar = new Tesla();
TeslaCar.drive(200);

console.log(TeslaCar)
console.log('-----')

let OpelCar = new Car();
OpelCar.drive(80);

console.log(OpelCar)

// function func () {
//     return class {
//         sayHello() {
//             console.log('Hello!')
//         }
//     }
//     // console.log(this.name)
// }


// class Porsche extends func() {
//     // constructor(name, ...args) {
//     //     super(...args)
//     //     this.name = name
//     // }
// }

// let car = new Porsche()
// car.sayHello();
// console.log(car)

// class Porsche extends Car {
//     constructor(hybrid, ...args) {
//         super(...args);

//         this.hybrid = hybrid
//         this.electric = false;
//     }
//     isElectric(value) {
//         this.electric = value
//     }
//     isHybrid(value) {
//         this.hybrid = value
//     }
//     // get name() {
//     //     return this._name
//     // }
// }

// let car = new Porsche(false, 'Porsche X10')
// console.log(car)
// car.drive(100)
// console.log(car)
// car.stop()
// console.log(car)
// car.isElectric(true)
// console.log(car)
// car.isHybrid(true)
// console.log(car)

// console.log('---------')

// let carOpel = new Car('Opel')
// console.log(carOpel)
// carOpel.drive(40)
// console.log(carOpel)

// class Field {
//     constructor(value) {
//         this.value = value
//     }

//     click = () => {
//         console.log(this.value)
//     }
// }

// let input = new Field('Denis');
// input.click()

// setTimeout(input.click, 1000);

// setTimeout(() => input.click(), 1000)

// function makeClass(phrase) {
//     return class {
//         sayHello() {
//             console.log('Hello!', phrase)
//         }
//     }
// }

// let User = makeClass('my friend');
// new User().sayHello();


// let User = class {
//     constructor(name) {
//         this.name = name
//     }
//     sayHello() {
//         console.log(`Hello, ${this.name}`)
//     }
// }

// class User {
//     name = "Maria";
//     // constructor(name) {
//     //     this.name = name
//     // }
//     sayHello() {
//         console.log(`Hello, ${this.name}`)
//     }
//     // get name() {
//     //     return this._name
//     // }
//     // set name(value) {
//     //     if(value.length < 6) {
//     //         console.log('Too short');
//     //         return;
//     //     }

//     //     this._name = value
//     // }
// }

// let user = new User()
// user.name = "Maria"
// new User().name = "Maria"
// console.log(user)
// user.sayHello()
// console.log(new User())
// new User().sayHello()

// let user = new User("Maria123")
// console.log(user.name)

// let user1 = new User("Maria");
// console.log(user1.name)

// console.log(typeof User)

// let user = new User("Maria")
// console.log(user)

// user.sayHello();






// let user = {
//     name: "Maria",
//     surname: "Test",
//     age: 18,
//     role: 'user',
//     sayHello: () => {
//         console.log(`Hello, ${this.name} ${this.surname}`)
//     }
// }

// // function sayHello() {
// //     console.log("Hello," + ' ' + this.name + ' ' + this.surname)
// // }

// // user.sayHello()

// setTimeout(user.sayHello, 1000);

// // setTimeout(() => {
// //     user.sayHello()
// // }, 1000);

// let userFunc = user.sayHello.bind(user)
// userFunc();


// showMessage(confirm('Press ok or cancel'), yes, no);

// function showMessage(message, yes, no) {
//     if(message) {
//         yes()
//     } else {
//         no()
//     }
// }

// function yes() {
//     console.log('Yes')
// }

// function no() {
//     console.log("No")
// }


// let user = {
//     // name: "Denis123",
//     surname: "Test",
//     // fullName: function () {
//     //     return this.name + ' ' + this.surname
//     // }
//     // get fullName() {
//     //     return this.name + ' ' + this.surname
//     // },

//     // set fullName(value) {
//     //     // this.name = value.split(' ')[0];
//     //     // this.surname = value.split(' ')[1];
//     //     [this.name, this.surname] = value.split(' ')
//     // }
//     get name() {
//         // if()
//         return this._name
//     },
//     set name(value) {
//         if(value.length < 6) {
//             console.log("Too short");
//             return;
//         }

//         this._name = value
//     }
// }
// user.name = "Denis123"
// console.log(user)
// user.name = "Maria123"
// console.log(user)

// console.log(user.fullName)

// user.fullName = "Maria 124"

// console.log(user.name)

// console.log(user.fullName)
// function User(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.role = 'user';

//     this.sayHello = () => {
//         console.log("Hello," + ' ' + this.name + ' ' + this.surname)
//     }
// }

// let user = new User("Denis", "test1", 16);

// let user = {
//     name: name,
//     surname: surname,
//     age: age,
//     role: 'user',
//     sayHello: function() {...}
// }

// user.sayHello()


// function User() {
//     // ...
// }

// let user = new XMLHttpRequest;


// function User(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.role = 'user';
// }

// function NewUser(name) {
//     this.name = name;

//     return;
// }

// console.log(new NewUser('test').name)

// let user = collectObject();

// function collectObject() {
//     let test1 = new NewUser('test');
//     let test2 = new User('321', "test1", 16);

//     return {
//         ...test2,
//         ...test1
//     }
// }

// console.log(user)

// let user = [];

// user.push(new User('test', 'surname', 14))
// user.push(new User('123', "Test", 18))
// user.push(new User('321', "test1", 16))

// console.log(user)

// let user = new User("Maria", "Test", 18);
// let user1 = new User("Denis", "test1", 16)

// console.log(user)
// console.log(user1)

// let user = {
//     name: name,
//     surname: surname,
//     age: age,
//     role: 'user'
// }