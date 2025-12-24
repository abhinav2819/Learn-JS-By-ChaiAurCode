//To declare a object we have two different ways
//                                       a)Object Literals 
//                                       b)Object Constructor (Singleton Ojects are formed using this)

//The only difference between these two is taht when we create objects using constructor then those are thw singleton objects but this is not applied for the literals object creation where we can use instances of it any where

//Object Literals

// const JSUser = {}//This is the basic syntax of defining a object currently it is a empty object.

//Symbol 

const mySym = Symbol("Key1")

const JSUser = {
    name: "Abhinav",//We we have defined the property as key: value pair 
    "full name": "Abhinav Raj",
    // mySym: "myKey1",//It will be treated as key(String) - value(String) pair
    [mySym]: "mykey1",//It will be treated as key(Symbol) - value(String) pair
    age: 21,
    location: "Ranchi",
    email: "rajabhinav@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"]
}
//Note : When we define a property key we can write it in curlly braces as string(Using double quots or single quots) or we can write the key name directly, so in any case key will be treated as string only by the JS.
//But a problem arises when we have to provide the name of the key containing spaces then this direct method will not work- so accordingly we have also two differnt way of calling the object propertie og log in console while printing
//We can understood this by seeing above example where i taken a property key in a string having spaces; "full name" se this in above object and see below for the calling methods.

//Direct way of calling the property
console.log(JSUser.email);//Same output as belows statement
//Differnt way of calling the property using square brackets for calling for both the property key wheater it is in the quots or not in the quots
console.log(JSUser["email"]);//Same output as upper statement

//Now if we try to print the full name we have only one option to access it using the second method of calling the properties key - so we need this method of calling the properties key as well

console.log(JSUser["full name"]);

//If we try to add our symbol in the object property like this : mySym: "myKey1" - then it is treated as string we can see this by printing the type of the symbol(Vale will be printed as it is) that we need as symbol datatype

console.log(JSUser.mySym);
console.log(typeof JSUser.mySym);//Output : String

//So for symbol datatype we use to add property in the object like this : [mySym]: "mykey1" - now this will gives us the right symbol representing the symbol(datatype) only that we have created

console.log(JSUser[mySym]);
console.log(typeof JSUser[mySym]);//Output : String but it is refering the symbol that we have created and we can we this when we print the whole object

console.log(JSUser);

//How to manipulate any property

JSUser.email = "abhinavraj@gmail.com"
//This is the a type of comment for that i installed a extension named better comment by Aaron Bond
        //!         -----how to freeze the object so that no one can change its property-------

        //!         ----------------Object.freeze(JSUser)-----------------
//If we try to change any property after object being freezed we don't see any errors but nothiing will be updated
JSUser.name = "Raja"

// console.log(JSUser);//We can see the last changes that we have made before freezing the object and after freezing when we tried to update our name, it doesn't updated in the object


//Function

JSUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JSUser.greeting());//Output : Hello JS user
//                                        undefined

//we are getting undefined as well because any function in the javascript must return any thing means return statement is needed and in our case we didn't provided any return statement 
//Hear is the way through which we will not get that undefined message in the console

JSUser.greeting = function(){
    return "Hello JS user";
}
console.log(JSUser.greeting());//Output : Hello JS user only

//We can use string interpolation to add the properties in the print statement and for that we have to use this keyword to explicity say that i want the JSUser object property

JSUser.greetingTwo = function(){
    return `Hello JS user ${this.name}`;
}
console.log(JSUser.greetingTwo());//Output : Hello JS user Abhinav