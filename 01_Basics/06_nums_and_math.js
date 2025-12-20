//Genral way of representing the number in the javaScript
const score = 100;
console.log(score);

//Hear explicitly we told that this value is a type of number only, above variable is represents the number but for the below's case it strictly says that it is a type of number only
const balance = new Number(400.21)
console.log(balance);

//Some prototypes are following
console.log(balance.toString());//This will convert the number into a string
console.log(balance.toFixed(1));//The output will be based on the number of decimal we want to fixed, means if we fixed the number after decimal by 1 using the toFixed() method and a number holds more than one decimal place than it will convert the number by lasting only one decimal place (for example 100.5839 will 100.5 only)

//Lets talk about the precision property of the number type
//so basically in this method we say toPrecision and passes the max value that covered for precising
//Points to remember: 1. When providing the precising value that will cover the value of the number, we have to be sure that it will not exceed
//2. It counts from the starting character of the number value
//Lets understand with an example that if we took a number like 123.5794 and we want precision value till 3 then it will check the decimal and precise it automaticlly in round figure and for this case it will be 124 no matter how many decimal values are present after that. And at the same time if we increase the precision value to 4 then resukt will be 123.6 which contains one decimal value
//So basically it totally depends on the number that we are providing and how we want to precise it
const otherNumber = 123.5794
console.log(otherNumber.toPrecision(4));

//Lets see hoe we will provide the commas in the number we have to read the long numbers easily
const hundreds = 10000000
//It will give us the way of counting the numbers and inserting commas in India style
console.log(hundreds.toLocaleString());
//If in case we want to use the U.S. number system Indin then we can use this below way to get this by providing the country code like this 'en-US' for U.S. and 'en-IN' for India
console.log(hundreds.toLocaleString('en-US'));

//Number datatypes provides directlly attached properties and some are show below
//These are the limitation that have the Number datatype
//Mostly used properties in context of number while working at production level
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//Note: We know that Number type does not provide more properties so we try to convert the number type into string to use the differnt prototypes(properties) of the string
console.log(balance.toString().length);

// +++++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++

//Math is a library in the javaScript that comes with it by default
//We have lots of properties and function in Math library and to see that we can use the inspect tool in the browser and just writting the Math

//Lets see some commanly used properties and function that we use at production level

console.log(Math);
console.log(Math.abs(-56));//Basically it converts the negetive values in postive value
//Basically it gives us a round figure of any value which have decimal value with it and it uses the concept of mathmetics only where if the deciaml value is exceeding from 5 or more it will convert the value to the next value and vice versa for the lowing the value if deciaml have less than 5
console.log(Math.round(4.6));

//to not completly get dependent on the round function we have two different function where we can decide whether the value will be increase by 1 or lowered by 1 no matter what the decimal have in the value

console.log(Math.ceil(4.2));//Output : 5
console.log(Math.floor(4.9));//Output : 4

console.log(Math.min(4, 5, 6, 9))//We use this function to find the min value present in the array
console.log(Math.min(4, 5, 6, 9))//We use this function to find the max value present in the array

//Now lets talk about one function which is used max in the production level

console.log(Math.random());//Basically we get a random number as output which lies betwwen 0 to 1
//Now we as shifted the one value of random value to get the value more than 1 and to achieve this completly we add 1 to avoid any 0 as outcome(If we don't want 0 in case)
console.log((Math.random()*10) + 1);
//Basically it will gives only the floor value without decimals (In case when we are creating dice game or any other game where we wnated only the values of the starting)
console.log(Math.floor((Math.random()*10) + 1));

//But what if we want our own coustmization, means the range from-to we want in our case we use this technique using the formula

const min = 10
const max = 20
//So basically we actually doing one by one: 
// Math.floor() => we determined that we we want only the staring value and decimals
// Math.random() => we asked a random value
// max-min  => we took the range 
// (max-min + 1) => we avoided any any 0 value if random provides it by adding it with 1
// (max-min + 1) + min => we added the min value to get the value minimum to the assigined in the min variable
//(Math.random() * (max-min + 1) + min) => we multiplied the random value with our range
//Math.floor(Math.random() * (max-min + 1) + min) => and we wrapped it in this way to get a floor value only avoiding any decimals
console.log(Math.floor(Math.random() * (max-min + 1) + min));
