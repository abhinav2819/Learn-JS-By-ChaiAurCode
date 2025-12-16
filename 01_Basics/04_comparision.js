//These are the simple comparison operators in javascript
/* console.log(2>3);
console.log(2<3);
console.log(2>=3);
console.log(2<=3);
console.log(2!=3);
console.log(2==3); */


//There might be some confusion when we do comparision between two different data types
//Javascript internally converts one data type to another to perform comparision
//We should be careful while comparing different data types
/* console.log("2"<3);
console.log("02">3); */

//To avoid this confusion we have "strict equality and strict inequality operators" in javascript which do not perform type conversion and check the data type as well as value

/* console.log("2"===5);//returns false because data types are different
console.log("2"!==5);//returns true because data types are also different
console.log(5 === 8);//returns false because values are different even though data types are same
console.log(5 !== 8);//returns true because values are different even though data types are same
console.log(5 === 5);//returns true because both data types and values are same
console.log(5 !== 5);//returns false because both data types and values are same */


/* console.log(null> 0);//false because null is converted to 0
console.log(null== 0);//false because null is only equal to undefined
console.log(null == undefined);//true because both are considered equal in non-strict equality
console.log(null>= 0);//true because null is converted to 0 */

//Be careful while comparing with null and undefined
//Note: In javascript comaprision operator are treated differently than equality operators

//For more information refer MDN documentation on comparision operators
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators

console.log(undefined == 0);//false because undefined is only equal to null
console.log(undefined > 0);//false because undefined is converted to NaN
console.log(undefined < 0);//false because undefined is converted to NaN

//Summary:
//1. Use strict equality(===) and strict inequality(!==) operators to avoid type conversion issues
//2. Be cautious while comparing null and undefined with other values
//3. Understand how javascript handles type conversion during comparisons
//4. Refer to official documentation for detailed behavior of comparison operators
//5. Avoid unneccessary comparisons between different data types to prevent unexpected results
 