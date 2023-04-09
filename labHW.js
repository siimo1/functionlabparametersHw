 // 1. Write a function called greetCustomer that will log "Welcome to the store" + the name parameter

const greetCustomer = (name) => {
    console.log("Welcome to the store " + name);
  }
  greetCustomer("Mr Smith");

// 2. Write a function called logPositiveOrNegative that will log if the number parameter is a negative number, positive number, or 0
const logPositiveOrNegative = (number) => {
    if (number == 0) {
      console.log("The number is 0");
    } else if (number > 0) {
      console.log("The number is positive");
    } else {
      console.log("The number is negative");
    }
  }
  logPositiveOrNegative(0);

// 3. Write a function called returnIsPositive that will return if the number parameter is a positive "true" or not  positive "false"
const returnIsPositive = (number) => {
  if  (number > 0) {
    return true
  };
  else if (number < 0) {
    return false
  }
};
console.log(returnIsPositive(1));


// 4. Write a function called returnIsTooShort that will return true if the password parameter is shorter than 8 characters
const returnIsTooShort = (password) => {
  if (password.length < 8) {
    return true
  }
  else {
    return false
  } 
};
pass = "password123"
console.log(returnIsTooShort(pass));

// 5. Write a function called returnIsBreakingLaw that will return true if the age parameter is < 21 AND drink parameter is "alcohol"
const returnIsBreakingLaw = (age, drink) => {
  if (age < 21 && drink === "alcohol") {
    return true
  }
  else {
    return false
  }
};
console.log(returnIsBreakingLaw(22, "alcohol"));
console.log(returnIsBreakingLaw(19, "alcohol"));


// 6. Make a variable called count
// Write a function called addToCount that will add the number parameter to the count variable.
// Call addToCount 4 times with different numbers
let count  = 3
const addToCount = (number) => {
total = count + number
return total
}
console.log(addToCount(2));
console.log(addToCount(12));
console.log(addToCount(170));
console.log(addToCount(59));

// 7. Write a function called returnIsChase that will return true if the name parameter is "Chase" - Make case insensitive "Chase" "CHASE" "CHasE" all return true
const returnIsChase = (name) => {
  if(name.toLowerCase() === "chase") {
    return true
  }
  else {
    return false
  }
}
console.log(returnIsChase('ChAsE'));

// 8. Make a variable called class that is an array ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"]

const classArray = ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"]
console.log(classArray);

// Write a function called returnClassIsTooSmall that will return true if the students parameter has less than 10 students

const returnClassIsTooSmall = (students) => {
  if (students < 10) {
    return true
  }
  else {
    return false
  }
}
console.log(returnClassIsTooSmall(7));
console.log(returnClassIsTooSmall(27));

// 9. Make a variable called combineStrings that will take stringOne parameter and stringTwo parameter and return them combined. call this function 3 times with 6 strings.

const combineStrings = (stringOne, stringTwo) => {
 return  stringOne + stringTwo   
}
console.log(combineStrings("If ","true"));
console.log(combineStrings("PineApple ","express"));
console.log(combineStrings("look ","up"));


// 10. Write a function called returnDataType that will return the datatype of the data parameter
const returnDataType = (data) => {
  return typeof data
}
console.log(returnDataType(2));
console.log(returnDataType("oh"));
console.log(returnDataType());

// 11. Write a function called addStudentToClass that will push the student parameter to the class array from problem number 8
// Call this function 2 times

const addStudentToClass = (student) => {
  classArray.push(student);
  console.log(classArray);
}
addStudentToClass("Simo");
addStudentToClass("Learner");

//12. VERY OPTIONAL - Make a variable called extraStudents. This should be an array with about 10 string names. 
//Write a function called fillClass that will loop until the class array has >= 15 students.
//Every loop one student should be put into the class array and taken out of the extraStudents array. 


