// Challenges

// 1. Write a function that takes a number and returs tru if it is a positive number and false if it is a negative number.
   function isNumberPositve(number) {
    if (number >= 0){
        return true;
    }
    else {
        return false;
   } 
 }

console.log (isNumberPositve(-1));
console.log (isNumberPositve(10));

// 2. Write a function that takes a number of days and converts it into an age.
function convertDaysToAge(days){
   console.log(age = days/365);
   }
   
   convertDaysToAge(3650);
   convertDaysToAge(6570);

//3. Write a function that takes three numbers and returns the largest of the three numbers.
function getLargestNumber(a,b,c){
    console.log(Math.max(a,b,c));
}

getLargestNumber(2,4,1);
getLargestNumber(6,2,3);


// 4. Write a function that takes an array of names and returns the last name from the array of names.
function getLastName (names){
    if (names.length > 0) {
        
        console.log(names[names.length - 1]);
    }
}
   
getLastName(["Charlie", "Rob","Andy"]);
getLastName(["Ash", "Stu"]);

//5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.
function allNumbersPositive ([numbers]){
   if (numbers>0) {
            return true; 
        }
        else{
            return false;
        }
    }
    console.log (allNumbersPositive([2,4,5]));
    console.log (allNumbersPositive([-5,4,6]));
