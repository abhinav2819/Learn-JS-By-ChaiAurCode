const myName = "Abhinav"
const title = "Raj"

//This way of concatenation is called as 'String Concatenation'
//In modern JavaScript, we can also use Template Literals (Template Strings) to achieve the same result in a more readable way.
console.log(myName + title + " loves AK");

//Using Template Literals
console.log(`Hey I am: ${myName} and my title is: ${title} who loves AK`);

//Another way of taking string as object

const gameName = new String('football');
console.log(gameName);
//Hear string is created as an object using String constructor, due to which it has additional properties and methods because the string is wrapped in a String object and stored in the key value pair format.

//If we try to see the type of gameName, we will found that it is of type 'object' instead of 'string'
console.log(typeof gameName);

//To see the key value pair format we can use our browser console by opening inspect
// we can use below code to see the properties and methods of the String object.
console.log(Object.getOwnPropertyNames(gameName.__proto__));

//Different types of using String Methods

console.log(gameName.length);//To see the length of the string

console.log(gameName.replace('football','cricket'));//To replace a part of the string with another string

console.log(gameName.toUpperCase());//To convert the string to uppercase

//But for my current situation my string is already in lowercase, so if I try to convert it to lowercase again it will remain the same.
console.log(gameName.toLowerCase());//To convert the string to lowercase

console.log(gameName.toLocaleLowerCase());

//The above two methods toLowerCase() and toLocaleLowerCase() are similar but the latter takes into account the host's current locale when converting the string to lowercase. This can be important for certain languages where case conversion rules may vary based on locale.

//To see the prototype of the String object, but this will work only in browser console
console.log(gameName.__proto__);

console.log(gameName.charAt(3));//To see the character at a particular index

console.log(gameName.indexOf('t'));//To see the index of a particular character in the string

//Checking for substring presence we must foolow case sensitivity
console.log(gameName.endsWith("ll"));//To check if the string ends with a particular substring

console.log(gameName.includes("BALL"));//To check if the string includes a particular substring

//To extract a part of the string from start index to end index (end index not included), so we have to provide end index + 1 while using substring method means we have to provide the position of the characters, because the index starts from 0.
console.log(gameName.substring(0,7));//Output will be 'footbal'

//Same thing can be done like this as well by assing the substring to a variable
const newString = gameName.substring(0,8);
console.log(newString);//Output will be 'football'

//Similarly we can use slice method but the difference is that slice method can also accept negative indices to extract a part of the string from the end.
const anotherString = gameName.slice(-8,4);
const anotherString2 = gameName.slice(-8,-5)
//When using negative indices, -1 refers to the last character of the string, -2 refers to the second last character, and so on, but the end index is not included in the result, so in the above example -5 refers to the 5th character from the end but it is not included in the result.

const anotherString3 = gameName.slice(-8);//If we don't provide the end index, it will extract till the end of the string, and in result we will get the complete string, but when we try to take parameter as (-8, 0) it will return empty string because 0 refers to the starting index and the end index is not included in the result, but if we take (0,8) as parameters for the substring or slice method we will get the complete string as output.
//So summary is that whwn we take negetive index and try to take 0 as end index it will return empty string but when we take 0 as starting index and length of the string as end index as any other positive character it will return the string till where the end index is provided.

console.log(anotherString);
console.log(anotherString2);
console.log(anotherString3);

const sampleString = "    Hello World!     ";
console.log(sampleString);
//This trim method removes the whitespaces form both ends of the string, as we know that in production we work on lots of string as our value and sometimes there can be unwanted whitespaces in the string which can create problem while comparing or working with those strings, so to avoid that we use trim method to remove those unwanted whitespaces.
console.log(sampleString.trim());

//In case we want to remove whitespaces from only one side of the string we can use trimStart and trimEnd methods.
console.log(sampleString.trimStart());//To remove whitespaces from the starting of the string

console.log(sampleString.trimEnd());//To remove whitespaces from the ending of the string

const url ="https://abhinavraj.com/abhinav%20raj"

// console.log(decodeURIComponent(url));//To decode a URL encoded string

console.log(url.replace('%20', '-'));

//Check whether the charcter is present in the url or not. It is also case sensitive.
console.log(url.includes('Abhinav'));

//Split
const newSampleString = "abhinav-raj-raja"; 
console.log(newSampleString.split('-'));
