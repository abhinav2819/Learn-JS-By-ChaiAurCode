//Concept of Object.create(prtotype)

const animal = {eats: true}

//a. Object literal
const cat = {eats: true}
//'cat' is an independent copy

//b. Object.create()
const dog = Object.create(animal)
//'dog' inherits 'eats' from animal

//console.log(dog);//- the console shows only the object’s own properties → and currently dog object have no properties own by it, thats why we are getting a empty object on console because it have the prototype that is inherited from the animal object

//Summary: Object.create(proto) creates a new object with its prototype set to proto, allowing the new object to inherit properties and methods from that prototype.
/* console.log(dog.eats); // true (found via prototype chain)
console.log(Object.getPrototypeOf(dog)); // { eats: true }
console.log(dog.hasOwnProperty("eats")); // false */


//Both Object1 and Object2 will create Non-Singleton Object
//a.Objet1
// const tinderUser1 = new Object()
//b.Object2
//const tinderUser2 = {}
// console.log(tinderUser2);//Output: {}
//{} and new Object{} → both create new instances, not a Singleton.

//Singleton - Singleton means only one instance exists globally.
//! - we will researching more on the singleton further using MDN documentation
// A Singleton ensures only one instance of an object exists globally. The simplest way is to use a closure or a class with controlled instantiation.

const Singleton = (function () {
    let instance; // private variable to hold the single instance

    function createInstance() {
        return { message: "I am the only instance!" };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Usage
const object1 = Singleton.getInstance();
const object2 = Singleton.getInstance();


//console.log(obj1 === obj2); // true (same instance)

//Lets see differnt functions and properties used in the objects

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//lets create a another object 
//Hear we have created a nest object
const regularUser = {
    fullname: {
        userfullname: {
            firstname: "Abhinav",
            lastname: "Raj"
        }
    }
}

//Property access (nested properties)
// console.log(regularUser);
//Output: { fullname: { userfullname: { firstname: 'Abhinav', lastname: 'Raj' } } }

// console.log(regularUser.fullname);
//Output: { userfullname: { firstname: 'Abhinav', lastname: 'Raj' } }
// console.log(regularUser.fullname.userfullname);
//Output: { firstname: 'Abhinav', lastname: 'Raj' }
// console.log(regularUser.fullname.userfullname.firstname);
//Output: Abhinav

//Lets see how we can combine differnt object properties in one object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "d", 4: "e"}
const obj3 = {5: "f", 6: "g"}

//One of the simplest way of combining the objects like this

/* const obj4 = {obj1, obj2, obj3}
console.log(obj4); */

//Another way of combining these like this

/* const obj4 = Object.assign({}, obj1, obj2, obj3)//Hear {} -> is targated empty object where as the objects obj1,obj2 and obj3 will be combined in the targated object
console.log(obj4); */

//We have one another way to combine these objects in one object, and that is using spread operator

/* const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4); */

//Note : The only thing to keep in the mind that we have to use {} for creating as assign objects anywhere

//Lets see how do we handle the data when it will coming from the database
//When we get data from database we get array of objects
const users = [
    {
        id: 1,
        email: "abhi@gmail.com"
    },
    {
        id: 2,
        email: "anshu@gmail.com"
    },
    {
        id: 3,
        email: "anshnav@gmail.com"
    }
]

//In this way we can access the first value of in array which is a object and then we can access the properties of the object
// console.log(users[1].email);

//Some other methods

//We use Object.keys and Object.values to get the data and try to use loop through
//We get output in array
// console.log(Object.keys(tinderUser));//We took all the keys in an array and we use loop on it and use it further where we wanted to use
// console.log(Object.values(tinderUser));//Similarly
//Less used
// console.log(Object.entries(tinderUser));//We will get array in array

//To check whether you have this value or not

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
// console.log(tinderUser.hasOwnProperty('isLogged'));//false

                //--------- To get more information about the properties or the prototype 
                //consider going and tring on the browser-> inspect -> console ----------


//Destructuring of Objects

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//Comman way of accessing a property from the objects
//course.courseInstructor

//we have some different way destructure the data and use it 
//If we wanted to print the above property 3 times than i have to write that command line three times which is lot of boilerplate code so to avoid that we use extracting values from the object and using simply shown in belows line
const {courseInstructor} = course
//we can aslo assign new variable that can be used effciently any where
const {coursename: cn} = course
console.log(courseInstructor);
console.log(cn);

//Lets talk about JSON format 

/* {
    "name": "hitesh",
    "coursename": "JS in Hindi",
    "Price": "free"
} */

//When we get data from the backend we will be getting data in array containing numbers of objects and we use those objects for forwarding the data to the browser by rendring and destructuring that.(API is used for fetching the data from the bcakend and modifing it accordingly and showing back to browser)
//This is the workflow of how a fullstack application runs
/* - JavaScript is a browser‑based language (it runs inside the browser).
- When you build a frontend app (React, Angular, Vue, or plain JS), that JavaScript code is loaded in the browser.
- When the user triggers an action (like clicking a button or loading a page), the JavaScript code sends a request using an API method (fetch, axios, etc).
- That request goes to the backend REST API (Spring Boot in your case).
- The backend processes the request (controller → service → database) and sends back data (usually JSON).
- The JavaScript code receives that data, formats it, and updates the UI.
- Finally, the browser displays the updated UI to the user. */

/* So the connection is:
Browser (runs JS) → JavaScript API call → Backend REST API → Backend responds → JavaScript updates UI → Browser shows it. */
