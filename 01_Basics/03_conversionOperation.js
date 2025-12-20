//let numberScore = 100

//First way of printing type of the variable
console.log(typeof(numberScore))

//Second way of printing type of the variable
console.log(typeof numberScore)

//Conversion operations
//1. Number to String


//If we take a valid number then it will convert to string
let numberScore = 100
console.log(numberScore);
console.log(typeof numberScore);

let stringScore = String(numberScore)
console.log(stringScore);
console.log(typeof stringScore);

//If we take number as string with some other chracters then it will return NaN
let otherNumberScore = "100abc"
console.log(otherNumberScore);
console.log(typeof otherNumberScore);

let convertedOtherNumberScore = Number(otherNumberScore)
console.log(convertedOtherNumberScore);
console.log(typeof convertedOtherNumberScore);

//2. String to Number

//If we take a valid string number then it will convert to number
let stringNumber = "150"
console.log(stringNumber);
console.log(typeof stringNumber);

let convertedStringNumber = Number(stringNumber)//returns 150 as number

console.log(convertedStringNumber);
console.log(typeof convertedStringNumber);

//If we take empty string then it will convert to 0 which is number
let emptyString = ""
console.log(emptyString)
console.log(typeof emptyString)

let convertedEmptyStringIntoNumber = Number(emptyString)//returns 0 as number
console.log(convertedEmptyStringIntoNumber)
console.log(typeof convertedEmptyStringIntoNumber)

//If we take string with spaces then it will also convert to 0 which is number
//If there are characters other than spaces and empty then it will return NaN
let stringOtherThanSpacesAndEmpty = "-/*+"
console.log(stringOtherThanSpacesAndEmpty)
console.log(typeof stringOtherThanSpacesAndEmpty)

let convertedStringOtherThanSpacesAndEmptyIntoNumber = Number(stringOtherThanSpacesAndEmpty)//returns NaN as number
console.log(convertedStringOtherThanSpacesAndEmptyIntoNumber)
console.log(typeof convertedStringOtherThanSpacesAndEmptyIntoNumber)

//3. Boolean to Number

//If we take true then it will convert to 1

let isLoggedIn = true
console.log(isLoggedIn);
console.log(typeof isLoggedIn);

let booleanToNumber = Number(isLoggedIn)//returns 1 as number
console.log(booleanToNumber);
console.log(typeof booleanToNumber);

//If we take false then it will convert to 0
let isLoggedInNew = false
console.log(isLoggedInNew);
console.log(typeof isLoggedInNew);

let booleanToNumberNew = Number(isLoggedInNew)//returns 0 as number
console.log(booleanToNumberNew);
console.log(typeof booleanToNumberNew);

//4. Null to Number
//If we take null then it will convert to 0
let isLoggedIn1 = null
console.log(isLoggedIn1);
console.log(typeof isLoggedIn1);

let booleanToNumber1 = Number(isLoggedIn1)//returns 0 as number
console.log(booleanToNumber1);
console.log(typeof booleanToNumber1);

//5. Undefined to Number
//If we take undefined then it will convert to NaN
let someValue = undefined
console.log(someValue);
console.log(typeof someValue);

let undefinedToNumber = Number(someValue)//returns NaN as number
console.log(undefinedToNumber);
console.log(typeof undefinedToNumber);

//Summary: In JavaScript, we can perform conversion operations between different data types such as Number, String, Boolean, Null, and Undefined using the Number() and String() functions. The conversions may yield different results based on the input values.
//Valid numbers and numeric strings convert as expected, while invalid strings result in NaN. Booleans convert to 1 or 0, null converts to 0, and undefined converts to NaN.

//6. String to Boolean
//If we take non-empty string then it will convert to true
let someString = "Hello"
console.log(someString);
console.log(typeof someString);

let stringToBoolean = Boolean(someString)//returns true as boolean
console.log(stringToBoolean);
console.log(typeof stringToBoolean);

//If we take empty string then it will convert to false
//If there are spaces in the string then also it will convert to true
//If there are some special characters in the string then also it will convert to true
let emptyString1 = ""
console.log(emptyString1);
console.log(typeof emptyString1);

let emptyString1ToBoolean = Boolean(emptyString1)//returns false as boolean
console.log(emptyString1ToBoolean);
console.log(typeof emptyString1ToBoolean);

//If we take null then it will convert to false
let nullValue = null
console.log(nullValue);
console.log(typeof nullValue);

let nullToBoolean = Boolean(nullValue)//returns false as boolean
console.log(nullToBoolean);
console.log(typeof nullToBoolean);


// ****************************** OPERATORS IN JAVASCRIPT ****************************** 

let value = 3
let negValue = -value
console.log(negValue);

                                            //Arithmetic Operators
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**3);
console.log(2%2);

                                     //String Concatenation Operator
let str1 = "hello"
let str2 = " abhinav"

// let str3 = str1 + str2
console.log(str1 + str2)
console.log(str3);

                                      //Type Coercion in JavaScript
//When we use + operator with string and number then it converts number to string and concatenates both
/* when there will be arthematic operation in starting it will perform arthematic operation first and then if there is + operator with string it will convert number to string and concatenate. Means if therer is string in starting then all will be treated as string only and if there is any arthematic operation in starting then the operation will be performed first*/
console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

//This is not a good practise to use multiple operators in a single statement without brackets
console.log(5 + 4 * 8 / 3);

                                     //Conversion using + operator
//These type of conversion are not a good practise
//When we use + operator with boolean true then it converts true to 1
console.log(true);
console.log(+true);
//When we use + operator with boolean false then it converts false to 0
console.log(false);
console.log(+false);

//When we use + operator with empty string then it converts empty string to 0
console.log(+"");

                                    //Assigntment Operators

//This is again is not a good practise to use multiple assignment in a single statement
let num1, num2, num3
num1 = num2 = num3 = 2+2
console.log(num1,num2,num3);


                            //Increment and Decrement Operators
let gameCounter = 100
//Prefix increment and decrement operator
++gameCounter;
--gameCounter;
console.log(gameCounter);
//Sufix increment and decrement operator
gameCounter++;
gameCounter--;
console.log(gameCounter);

let x = 3;
const y = x++;

//Here we are using $ to print the values of x and y using template literals
 console.log(`x:${x}, y:${y}`);

 //In the above example we can see that we incremented the x as postfix and assigned it to y and when we tried to print the values of x and y then we can see that the value of y is 3 because when we assigned the value of x to y then the increment operation was not performed yet as it was postfix increment. So, the value of y is 3 and after that the value of x is incremented to 4. Hence, when we print the values of x and y then we get x as 4 and y as 3.

let a = 5;
const b = ++a;

console.log(`a:${a}, b:${b}`);
