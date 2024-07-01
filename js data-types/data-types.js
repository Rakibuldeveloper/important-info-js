
                                                             // 1 Numbers

// Integers
let age = 30;
console.log(age);  // Output: 30

// Floating-point numbers
let pi = 3.14159;
console.log(pi);  // Output: 3.14159

// Perform mathematical operations
let result = age + pi;
console.log(result);  // Output: 33.14159





                                                            // 2 String

// Strings with single or double quotes
let name = 'Alice';
let message = "Hello, world!";
console.log(name);  // Output: Alice
console.log(message);  // Output: Hello, world!

// String concatenation
let fullName = name + ' Smith';
console.log(fullName);  // Output: Alice Smith

// Escape characters for special characters within strings
let quote = "He said, \"Hello\".";
console.log(quote);  // Output: He said, "Hello".



                                                               // 3 Booleans



// true and false values
let isLoggedIn = true;
let gameOver = false;
console.log(isLoggedIn);  // Output: true
console.log(gameOver);  // Output: false

// Conditional statements based on booleans
if (isLoggedIn) {
  console.log("Welcome back!");
}



                                                            // 4 Null and Undefine



// null represents intentional absence of a value
let emptyVar = null;
console.log(emptyVar);  // Output: null

// undefined represents a variable declared but not assigned
let undeclaredVar;
console.log(undeclaredVar);  // Output: undefined



                                                    // 5 Symbols (introduced in ECMAScript 6)




// Create a unique symbol
let uniqueSymbol = Symbol("mySymbol");
console.log(uniqueSymbol);  // Output: Symbol(mySymbol)

// Symbols are primarily used as object property keys
let obj = {
  [uniqueSymbol]: "This value is associated with the unique symbol"
};
console.log(obj[uniqueSymbol]);  // Output: This value is associated with the unique symbol




                                                    // 6  BigInts (introduced in ECMAScript 2020)




// BigInt for numbers beyond standard Number precision
let bigNumber = 9007199251234567890;
console.log(bigNumber);  // Output: 9007199251234567890n

// Cannot mix BigInts with regular numbers in operations
let sum = age + bigNumber;  // Error: Cannot mix BigInt and number types


                                                            // 7 Object


// Object literal to create an object
let person = {
    firstName: "Bob",
    lastName: "Jones",
    age: 35
  };
  
  console.log(person.firstName);  // Output: Bob
  console.log(person["lastName"]);  // Output: Jones (alternative access using bracket notation)
  


                                                            // 8 Array



let fruits = ["Apple", "Banana", "Orange"];
let numbers = [1, 2, 3, 4, 5];
let emptyArray = new Array();
let mixedArray = new Array(1, "hello", true);

let firstFruit = fruits[0];  // firstFruit will be "Apple"
let lastNumber = numbers[numbers.length - 1];  // Accessing the last element using array length
