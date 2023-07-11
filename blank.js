// function myFunc(theObject) {
//     theObject.make = "Toyota";
//   }
  
//   const mycar = {
//     make: "Honda",  //object or variable of the array
//     model: "Accord",
//     year: 1998,
//   };   // array of several values
  
//   console.log(mycar.make); // "Honda"
//   myFunc(mycar);
//   console.log(mycar.make); // "Toyota"

// print square of a number using function

//code ->

// function square(number){
//     return number * number
// }

// console.log(square(16))

// write a function to find factorial

// ternary condition ? 'true' : 'false'

const factorial = function fact(number){
    return number < 2 ? 1 : number * fact(number - 1);
};

console.log(factorial(5));

// const factorial = function fac(n) {
//     return n < 2 ? 1 : n * fac(n - 1);
//   };
  
//   console.log(factorial(3)); // 6
  


  