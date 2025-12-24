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
console.log(users[1].email);

//Some other methods

//We use Object.keys and Object.values to get the data and try to use loop through
//We get output in array
console.log(Object.keys(tinderUser));//We took all the keys in an array and we use loop on it and use it further where we wanted to use
console.log(Object.values(tinderUser));//Similarly
//Less used
console.log(Object.entries(tinderUser));//We will get array in array

//To check whether you have this value or not

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
console.log(tinderUser.hasOwnProperty('isLogged'));//false

                //--------- To get more information about the properties or the prototype 
                //consider going and tring on the browser-> inspect -> console ----------