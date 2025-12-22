//Array

//Comman way decalring a array in a variable where it have all the different elements(can be of any type either string, number, array, boolean, etc)
//Follow MDN JavaScript documentation for detailed information
const myArr = [10, 20, 30, 40, 50]
const myHeros = ["SHAKTIMAN", "NAAGRAJ"]
const mixedType = ["Abhinav", 5, 3, true, [9, 11, 55], "Anshu", 'Anasnav']

/* console.log(myArr);
console.log(typeof myArr);
console.log(myHeros);
console.log(typeof myHeros);
console.log(mixedType);
console.log(typeof mixedType); */

//Other way of declaring a array using new keyword

const myArr2 = new Array(1, 2, 3, 4)
/* console.log(myArr2);
console.log(typeof myArr2);

console.log(myArr2[3]);//This will provide the single element at the index that is passed while printing */

//Array Methods

/* myArr.push(6)//Array will be updated and added a new element as 6 at the end of the array
myArr.pop()//Array will be updated and removed the last element from the array */

/* myArr.unshift(9)//Array will be updated and added a new element as 9 at the staring of the array
myArr.shift()//Array will be updated and removed a elment from the starting of the array only
console.log(myArr); */

//Checks

/* console.log(myArr.includes(50));//Output: true (As the element 50 exist in the array)
console.log(myArr.includes(5));//Output: false (As the element 5 does not exist in the array) */

//Index finding

/* console.log(myArr.indexOf(30));//If the element exist in the array then it will return the right index
console.log(myArr.indexOf(3));//If the element doesn't exist then the output will be alway -1 */

//Concept of Join
//We use join to convert the the type of array from object to string
const newArr = myArr.join()

/* console.log(myArr);
console.log(typeof myArr);
console.log(newArr);
console.log(typeof newArr); */

//Concept of Slice and Splice
//
console.log("Orignal array ", myArr);
//Splice is used to remove or add elements in an array, directly modifying the original array.

//To remove element using splice
/* const myn1 = myArr.slice(1,3)//Hear it means that start from index one and remove three elements just after that
console.log(myn1);
console.log("Updated array after slice operation ", myArr);//Same as the orignal array

const myn2 = myArr.splice(0,3)
console.log(myn2);
console.log("Updated array after splice operation ", myArr); */

//To add element using splice

const myn3 = myArr.splice(2, 0, 25, 26, 27, 28, 29)//it means start at index 2 remove 0 elements and add there 25
console.log(myn3);//Output will be nothing as we havent removed anything
console.log("Updated array after splice operation ", myArr);
