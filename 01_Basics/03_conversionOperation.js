//let numberScore = 100

//First way of printing type of the variable
//console.log(typeof(numberScore))

//Second way of printing type of the variable
//console.log(typeof numberScore)

//Conversion operations
//1. Number to String


//If we take a valid number then it will convert to string
/*let numberScore = 100
console.log(numberScore);
console.log(typeof numberScore);

let stringScore = String(numberScore)
console.log(stringScore);
console.log(typeof stringScore); */

//If we take number as string with some other chracters then it will return NaN
/* let otherNumberScore = "100abc"
console.log(otherNumberScore);
console.log(typeof otherNumberScore);

let convertedOtherNumberScore = Number(otherNumberScore)
console.log(convertedOtherNumberScore);
console.log(typeof convertedOtherNumberScore); */

//2. String to Number

//If we take a valid string number then it will convert to number
/* let stringNumber = "150"
console.log(stringNumber);
console.log(typeof stringNumber);

let convertedStringNumber = Number(stringNumber)//returns 150 as number

console.log(convertedStringNumber);
console.log(typeof convertedStringNumber); */

//If we take empty string then it will convert to 0 which is number
/* let emptyString = ""
console.log(emptyString)
console.log(typeof emptyString)

let convertedEmptyStringIntoNumber = Number(emptyString)//returns 0 as number
console.log(convertedEmptyStringIntoNumber)
console.log(typeof convertedEmptyStringIntoNumber) */

//If we take string with spaces then it will also convert to 0 which is number
//If there are characters other than spaces and empty then it will return NaN
/* let stringOtherThanSpacesAndEmpty = "-/*+"
console.log(stringOtherThanSpacesAndEmpty)
console.log(typeof stringOtherThanSpacesAndEmpty)

let convertedStringOtherThanSpacesAndEmptyIntoNumber = Number(stringOtherThanSpacesAndEmpty)//returns NaN as number
console.log(convertedStringOtherThanSpacesAndEmptyIntoNumber)
console.log(typeof convertedStringOtherThanSpacesAndEmptyIntoNumber) */

//3. Boolean to Number

//If we take true then it will convert to 1

/*let isLoggedIn = true
console.log(isLoggedIn);
console.log(typeof isLoggedIn);

let booleanToNumber = Number(isLoggedIn)//returns 1 as number
console.log(booleanToNumber);
console.log(typeof booleanToNumber);*/

//If we take false then it will convert to 0
/* let isLoggedIn = false
console.log(isLoggedIn);
console.log(typeof isLoggedIn);

let booleanToNumber = Number(isLoggedIn)//returns 0 as number
console.log(booleanToNumber);
console.log(typeof booleanToNumber); */

//4. Null to Number
//If we take null then it will convert to 0
/* let isLoggedIn = null
console.log(isLoggedIn);
console.log(typeof isLoggedIn);

let booleanToNumber = Number(isLoggedIn)//returns 0 as number
console.log(booleanToNumber);
console.log(typeof booleanToNumber); */

//5. Undefined to Number
//If we take undefined then it will convert to NaN
/* let someValue = undefined
console.log(someValue);
console.log(typeof someValue);

let undefinedToNumber = Number(someValue)//returns NaN as number
console.log(undefinedToNumber);
console.log(typeof undefinedToNumber); */

//Summary: In JavaScript, we can perform conversion operations between different data types such as Number, String, Boolean, Null, and Undefined using the Number() and String() functions. The conversions may yield different results based on the input values.
//Valid numbers and numeric strings convert as expected, while invalid strings result in NaN. Booleans convert to 1 or 0, null converts to 0, and undefined converts to NaN.

