// Declaring variables using const will make them immutable (cannot be reassigned)
const accountId = 45678911
// Declaring variables using let will make them mutable (can be reassigned)
let accountName = "John Doe"
/*
We prefer not to use var to declare variables because it has function scope and can lead to unexpected behaviors.
It's better to use const for variables that won't change and let for those that will.
*/
var accountPassword = "securePassword123"

/*
We prefer not declare variables without var, let, or const because it creates a global variable, which can lead to unintended side effects. It's better to explicitly declare variables using let or const.
*/
accountCity = "New York"

//accountId = 12345678  // This will cause an error because accountId is declared with const
//Lets change the attributes 
accountName = "Jane Smith"
accountPassword = "newSecurePassword456"
accountCity = "Los Angeles"


// Displaying the variables in a table format
console.table([accountId, accountName, accountPassword, accountCity])