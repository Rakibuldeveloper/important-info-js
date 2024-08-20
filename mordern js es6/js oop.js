// 1 : Make a simple object



// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
//     getName: () => {
//         return `my name is ${person.firstName} ${person.lastName}`}
// };

// console.log(person.getName());



// 2: class object without constructor



// class Person {
//     firstName = "John";
//     lastName = "Doe";

//     age = 50;
//     eyeColor = "blue";

//     getName() {
//         return `my name is ${this.firstName} ${this.lastName}`;
//     }
// }


// const info = new Person();
// console.log(info.firstName);
// console.log(info.lastName);
// console.log(info.age);
// console.log(info.eyeColor);
// console.log(info.getName());



// 3: class constructor without parameters

// class Person {
//     constructor() {
//         this.firstName = "John";
//         this.lastName = "Doe";
//         this.age = 50;
//         this.eyeColor = "blue";

//     }
//     getName() {
//         return `my name is ${this.firstName} ${this.lastName}`;     
//     }
// }

// let info = new Person();
// console.log(info);


// 4: class constructor with parameters

// class person {
//     constructor(num1, num2) {
//         let sum = num1 + num2;
//         console.log(sum);
//     }
// }

// let result = new person(50, 60);



// 5: static keyword


// class person {
//     static firstName = "John";
//     static lastName = "Doe";
//     age = 50;
//     eyeColor = "blue";
//     static getName() {
//         return `my name is ${this.firstName} ${this.lastName}`;
//     }
// }

// console.log(person.getName());

// 6:inherit 

class father {
    number(){
        let a = 10;
        let b = 20;
        let c = 30;
        console.log(a+b+c);
    }
}


class son extends father {
    number(){
        let a = 10;
        let b = 10;
        let c = 30;
        console.log(a+b+c);
    }
}
  
let obj = new son();

obj.number()