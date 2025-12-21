// Dates

let myDate = new Date()
console.log(myDate);//This will print the current date and time but it is not readable properly
console.log(myDate.toString());//Now it print the date into string format
console.log(myDate.toDateString());//This will gives us the date with name of the day of the same date
//Returns a similar format of the default data but in string value in ISO format
console.log(myDate.toISOString());//Output : 2025-12-21T07:30:45.956Z
console.log(myDate.toJSON());//Output : 2025-12-21T07:30:45.956Z
console.log(myDate.toLocaleDateString());//Output : 21/12/2025
console.log(myDate.toLocaleString());//Output : 21/12/2025, 1:02:25 pm
console.log(myDate.toLocaleTimeString());//Output : 1:03:30 pm
console.log(myDate.toTimeString());//Output : 13:04:36 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString());//Output : Sun, 21 Dec 2025 07:36:29 GMT

console.log(typeof myDate);//Output : object

//let myCreatedDate = new Date(2025, 11, 21)//Output : 2025-12-21T18:30:00.000Z
// let myCreatedDate = new Date(2025, 11, 24, 5, 3)
// let myCreatedDate = new Date(2025, 11, 21)
// let myCreatedDate = new Date("12-21-2025")
let myCreatedDate = new Date("2025-12-21")
console.log(myCreatedDate.toLocaleString());
//Key Takesaway
// > new Dat(year, monthIndex, day) =>monthIndex is 0-based
// > console.log(myCreatedDate) => prints in UTC, not your local time Zone.
// > Use .toString() or .toLocalString() to see the local representation

let myTimeStamp = Date.now()
console.log(myTimeStamp);//Output : 1766307687512 it gives in miliseconds
// In this way we can get the in miliseconds and find from date only which have different format of time
console.log(myCreatedDate.getTime());
//Converting the miliseconds into seconds
console.log(Math.floor(Date.now()/1000)) ;//It gives us the deciaml value so to avoid that we use floor function of math library
//Note : We always make comaprisons in miliseconds when we have to compare different times

let newDate = new Date()
console.log(newDate);//This will gives the default format of the date 
//We have different methods through which we can find only specefic details that we want to know as per our need
console.log(newDate.getMonth()+1);//we know that month is starting from the index 0 as january and 11 as december, so to provide user friendly data use added 1.
console.log(newDate.getHours());
console.log(newDate.getDay());

//String interpolation is used for differnt purpose hear we used to print day with string
console.log(`${newDate.getMonth()} this is the month`);


//We can create our own coustmisable date where we can define properties and function as per our own need by coustmising it
newDate.toLocaleString('default',{
    //Hear we define all the properties and function as per our need
    weekday: "long",
    day: "2-digit"
    //We can use different properties and methods by pressing the ctrl+space button through our keyboard & use it as per our need
})
