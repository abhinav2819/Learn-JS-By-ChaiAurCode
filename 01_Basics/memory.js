//We know that in JavaScript there are two to store data: Primitive and Reference types.
//Primitive type are stored in the stack memory, while Reference types are stored in the heap memory.

//Example of Primitive types(Stack memory):
let myName = "Abhinav"

let myAnotherName = myName; //A copy of the value of myName is stored in myAnotherName
myAnotherName = "Raja"; //Changing myAnotherName does not affect myName

console.log(myName); //Output: Abhinav
console.log(myAnotherName); //Output: Raja

//Explanation: Here, myName is stored in stack memory. When we assign myName to myAnotherName, a copy of the value is created in stack memory. Changing myAnotherName does not affect myName.

//Example of Non-Primitive types(Heap memory):

let person1 = {
    username: "abhinav@google.com",
}
let person2 = person1; //person2 holds a reference to the same object in heap memory
person2.username="rajabhinav@gmail.com"; //Changing person2's username also affects person1
console.log(person1);//Output: rajabhinav@gmail.com
console.log(person2);//Output: rajabhinav@gmail.com

//Explanation: Here, person1 is an object stored in heap memory. When we assign person1 to person2, person2 holds a reference to the same object in heap memory. Changing the username property through person2 also affects person1 since both variables reference the same object.

//Summary:
//Primitive types are stored in stack memory, and assigning them creates a copy of the value.
//Reference types are stored in heap memory, and assigning them creates a reference to the same object. Changes made through one reference affect the other. 

//Follow this image for better understanding:
//c:\Users\rajsh\Pictures\Screenshots\Screenshot 2025-12-16 190009.png