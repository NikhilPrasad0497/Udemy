/*Lecture Hoisting */

//Fuction
// calAge(1920);
// function calAge(year){
//     console.log(2020-year);
// }

// calRetirement(1980);

// var calRetirement= function(year){
//     console.log(65-(2020-year));
// }



// Variables
console.log(age);
var age=23;

function foo(){
    var age=65;
    console.log(age);
}
foo();
console.log(age);
