const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

//push method 

/* marvel_heros.push(dc_heros)//which directly insert the whole array as one element in tthe marvel_heros array
console.log(marvel_heros); */

//concat method

/* const all_heros = marvel_heros.concat(dc_heros)//Which insert each elements of the sc_heros array as single element inside the marvel_heros array
console.log(all_heros); */

//Spread Operator

const all_new_heros = [...marvel_heros, ...dc_heros]//This will spread all the elements into a single array having each as individual elements

// console.log(all_new_heros);

//flat method
//When there is a array in which it have another array and in that another array there is one more array and some other elements all present so in that case id we want to see all the differnt belonging to there array either 1 times deeper or 2 times deeper we use flat method to get all in one array

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//Hear we can pass the level number as 1 or 2 or 3 till how much deeper we wanted to go, but in this case we used Infinity which simplifies all
// console.log(real_another_array);

//Array.isArray 
console.log(Array.isArray("Abhinav"));//Output: false

//Array.from(to convert any type to array)
console.log(Array.from("Abhinav"));

//Now what if we use from to convert any type to aaray and we pass key value pair; then it will be confused and in output we will get a empty array

console.log(Array.from({name: "Abhinav"}));// Interesting(We will further see this)

//Array.of
//We use this to bind our individual variables into a array
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
