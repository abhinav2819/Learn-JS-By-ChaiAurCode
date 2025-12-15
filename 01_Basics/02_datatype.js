"use strict"; //Treat all JS code as newer version
//alert(3 + 4); // we can use alert function to show a message in the browser not in node.js

console.log(3
    +
    4)//Code readability should be maintained(high)

//Data types in JavaScript
//1. Primitive data types
//a. Number => limited to 2^53
let num = 12;
console.log("Number:", num);
console.log("Type of num:", typeof num);
//b. String
let str = "Hello, World!";
console.log("String:", str);
console.log("Type of str:", typeof str);
//c. Boolean
let bool = true;
console.log("Boolean:", bool);
console.log("Type of bool:", typeof bool);
//d. Undefined
let undef;
console.log("Undefined:", undef);
console.log("Type of undef:", typeof undef);
//e. Null => standalone value
let nll = null;
console.log("Null:", nll);
console.log("Type of nll:", typeof nll);
//f. Symbol
let sym = Symbol("sym");
console.log("Symbol:", sym);
console.log("Type of sym:", typeof sym);
//g. BigInt
let bigIntNum = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigIntNum);
console.log("Type of bigIntNum:", typeof bigIntNum);
//2. Non-primitive data type
//a. Object
let obj = { name: "John", age: 30 };
console.log("Object:", obj);
console.log("Type of obj:", typeof obj);
//b. Array
let arr = [1, 2, 3, 4, 5];
console.log("Array:", arr);
console.log("Type of arr:", typeof arr);
//c. Function
function greet() {
    return "Hello!";
}
console.log("Function:", greet);
console.log("Type of greet:", typeof greet);
//Note: In JavaScript, arrays and functions are also considered objects.
//However, they have their own specific types when checked with typeof operator.
//Summary: JavaScript has various data types including primitive types like Number, String, Boolean, Undefined, Null, Symbol, and BigInt, as well as non-primitive types like Object, Array, and Function.