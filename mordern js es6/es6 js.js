

// 1: js strict mode

"use strict";


//2: js Arrow function

let sum = (a, b) => a + b;
console.log(sum(2, 3));  // Output: 5


// 3: Template Literals

let name = "Alice";
let message = `Hello, ${name}!`;
console.log(message);  // Output: Hello, Alice


// 4: Array Destructuring
let arr = [1, 2, 3, 4, 5];
let [one, two, three, four, five] = arr;

console.log(one);  // Output: 1
console.log(four);  // Output: 4


// 5: Object Destructuring
let obj = {
    city: "dhaka",
    village: "gulshan"
};
let {sohor, gram } = obj;
console.log(sohor);  // Output: dhaka


// 6: Nested Destructuring

const user = {
    nam : "alice",
    town: "barishal",
    parent:{
        father: "bob",
        mother: "papi"
    }
};
const{nam, town, parent:{father, mother}} = user;
console.log(nam);


// 7: Default Parameters
function greet(name = "Alice") {    
    console.log(`Hello, ${name}!`);
}
greet();  // Output: Hello, Alice


// 8: Rest Parameters
function sum(...nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5));  // Output: 15