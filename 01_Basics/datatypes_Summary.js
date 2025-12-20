//Datatypes are basically divided into two categories
//1. Primitive Datatypes
//2. Non-Primitive Datatypes
//Call by Value vs Call by Reference

//Primitive Datatypes
//These datatypes store the actual value in the memory location
//When we assign a primitive datatype to another variable, a copy of the value is created
//So if we change the value of one variable, it does not affect the other variable

//Non-Primitive Datatypes
//These datatypes store a reference (or address) to the actual value in the memory location
//When we assign a non-primitive datatype to another variable, a reference to the same memory location is created
//So if we change the value of one variable, it affects the other variable as well

//So this catogerization is based on how the data is stored in the memory and how they are accessed

                            //Primitive Datatypes in JavaScript(Call by Value)
/*Means the data we get is the copy of the original data stored in the memory when we assign it to another variable */

//Seven Primitive Datatypes : 
//1. Number
//2. String
//3. Boolean
//4. Null
//5. Undefined
//6. Symbol
//7. BigInt


//Javascript is a dynamically typed language, so we don't need to specify the datatype of a variable while declaring it
//The datatype is determined automatically based on the value assigned to the variable

const num = 42;               //Number
const scoreValue = 3.14;         //Number
const str = "Hello, World!";  //String
const isLoggedIn = true;            //Boolean
const outsideTemp = null;           //Null
const undef = undefined;     //Undefined
const id = Symbol('123');  //Symbol
const bigNumber = 9007199254740991n; //BigInt
//To make any number as BigInt we have to add 'n' at the end of the number


//Check for the symbol datatype
const sym1 = Symbol('123');
const sym2 = Symbol('123');
console.log(sym1 === sym2); // false, as each symbol is unique

                            //Non-Primitive Datatypes in JavaScript(Call by Reference)
/*Means the data we get is the reference of the original data stored in the memory when we assign it to another variable */

//Non-Primitive Datatype : Objects, Array, Functions
//All non primitive datatypes are of type 'object' in JavaScript, means they return 'object'.

const heros = ["shaktiman", "nagraj", "doga"]; //Array
let myObj = {                                //Object
    name: "John",
    age: 30,
    isAdmin: true
}
const myFuntion = function() {          //Function
    // console.log("Hello, World!");
    //This will return funtion as type but function is also a type of object in JavaScript
    console.log(typeof myFuntion);
}
//To check the datatype of a variable we use 'typeof' operator
console.log(typeof num); //number
console.log(typeof str); //string
console.log(typeof isLoggedIn); //boolean
console.log(typeof outsideTemp); //object (this is a known bug in JavaScript, typeof null returns object)
console.log(typeof undef); //undefined
console.log(typeof id); //symbol
console.log(typeof bigNumber); //bigint

console.log(typeof heros); //object
console.log(typeof myObj); //object
console.log(typeof myFuntion); //function (function is a special type of object in JavaScript)

//Summary
//Primitive Datatypes are stored by value and Non-Primitive Datatypes are stored by reference
//Primitive Datatypes include Number, String, Boolean, Null, Undefined, Symbol, BigInt
//Non-Primitive Datatypes include Objects, Arrays, Functions
//In JavaScript, all Non-Primitive Datatypes return 'object' when checked with 'typeof' operator except functions which return 'function'

//For more details refer to the documentation and other resources on JavaScript datatypes.

// https://262.ecma-international.org/5.1/#sec-11.4.3