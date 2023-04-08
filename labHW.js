/ 1. Write a function called greetCustomer that will log "Welcome to the store" + the name parameter
const greetCustomer = (name) => {
    console.log("Welcome to the store " + name);
  }
  greetCustomer("John");
// 2. Write a function called logPositiveOrNegative that will log if the number parameter is a negative number, positive number, or 0
const logPositiveOrNegative = (number) => {
    if (number === 0) {
      console.log("The number is 0");
    } else if (number > 0) {
      console.log("The number is positive");
    } else {
      console.log("The number is negative");
    }
  }
  logPositiveOrNegative(10);
// 3. Write a function called returnIsPositive that will return if the number parameter is a positive "true" or not  positive "false"
const returnIsPositive = (number) => {
    return number > 0;
  }
  console.log(returnIsPositive(5)); // true
// 4. Write a function called returnIsTooShort that will return true if the password parameter is shorter than 8 characters
const returnIsTooShort = (password) => {
    return password.length < 8;
  }
  console.log(returnIsTooShort("password")); // true
// 5. Write a function called returnIsBreakingLaw that will return true if the age parameter is < 21 AND drink parameter is "alcohol"
const returnIsBreakingLaw = (age, drink) => {
    return age < 21 && drink === "alcohol";
  }
  console.log(returnIsBreakingLaw(20, "alcohol")); // true
// 6. Make a variable called count.
let count = ''
// Write a function called addToCount that will add the number parameter to the count variable.
let addToCount = (number) => {
    count += number;
  }
// Call addToCount 4 times with different numbers
addToCount(2);
addToCount(3);
addToCount(4);
addToCount(1);
// 7. Write a function called returnIsChase that will return true if the name parameter is "Chase" - Make case insensitive "Chase" "CHASE" "CHasE" all return true
const returnIsChase = (name) => {
    return name.toLowerCase() === "chase";
  }
  console.log(returnIsChase("CHASE")); // true
// 8. Make a variable called class that is an array ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"]
const classArr = ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"];

// Write a function called returnClassIsTooSmall that will return true if the students parameter has less than 10 students
const returnClassIsTooSmall = (students) => {
    return students.length < 10;
  }
    console.log(returnClassIsTooSmall(classArr)); // false
// 9. Make a variable called combineStrings that will take stringOne parameter and stringTwo parameter and return them combined
const combineStrings = (stringOne, stringTwo) => {
    return stringOne + stringTwo;
  }
// call this function 3 times with 6 strings.
console.log(combineStrings("Hello", "World"));
console.log(combineStrings("My", "Name"));
console.log(combineStrings("is", "John"));
// 10. Write a function called returnDataType that will return the datatype of the data parameter
const returnDataType = (data) => {
    return typeof data;
  }
  console.log(returnDataType("Hello")); // string
  console.log(returnDataType(5)); // number
  console.log(returnDataType(true)); // boolean
// 11. Write a function called addStudentToClass that will push the student parameter to the class array from problem number 8
const addStudentToClass = (student) => {
    classArr.push(student);
  }
// Call this function 2 times
addStudentToClass("Bilbo");
addStudentToClass("Legolas");
// 12. VERY OPTIONAL - Make a variable called extraStudents. This should be an array with about 10 string names. 
let extraStudents = ["Bob", "Alice", "Charlie", "David", "Emily", "Frank", "George", "Hannah", "Isabelle", "Jack"];
// Write a function called fillClass that will loop until the class array has >= 15 students. Every loop one student should be put into the class array and taken out of the extraStudents array
const fillClass = () => {
  while (classArr.length < 15) {
    const student = extraStudents.shift();
    fillClass.push(student);
  }
}

fillClass();
console.log(fillClass);

// ALTERNATE SOLUTION USING .SPLICE 
// let extraStudents = ["Bob", "Alice", "Charlie", "David", "Emily", "Frank", "George", "Hannah", "Isabelle", "Jack"];

// const fillClass = () => {
//   while (class.length < 15) {
//     const student = extraStudents.splice(0, 1)[0];
//     class.splice(class.length, 0, student);
//   }
// }

// fillClass();
// console.log(class);