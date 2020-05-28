// Function constructor

// var nikhil={
//     name: 'Nikhil',
//     yearOfBirth: 1997,
//     job: 'Engineer'
// };

// var Person = function(name,yearOfBirth,job){
//     this.name=name;
//     this.yearOfBirth=yearOfBirth;
//     this.job=job;
// }

// // Prototype
// Person.prototype.calAge = function(){
//     console.log(2020-this.yearOfBirth);
// }

// Person.prototype.lastname = 'Smith';

// var ashu = new Person('Ashu', 1996, 'MBA');
// console.log(ashu);
// console.log(ashu.lastname)
// ashu.calAge();


// creating object using object.create()

// var personProto = {
//     calAge: function(){
//         console.log(2020 - this.yearOfBirth);
//     }
// }

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1997;
// john.job = 'Teacher';

// var Nikhil = Object.create(personProto, {
//     name: {value: 'Nikhil'},
//     yearOfBirth: {value: 1997},
//     job: {value: 'Engineer'}
// });

// Passing Functions as arguments.

var years= [1990, 1965, 1937, 2005, 1998];

function arrayCal(arr, fn){
    var arrRes=[];
    for(var i=0;i<arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calAge(el){
    return 2020-el;
}

function calFullAge(el){
    return el >= 18;
}

function maxHeartRat(el){
    if(el >=18 && el <=81){
    return Math.round(206.9 - (0.67 * el));
    } else{
        return -1;
    }
}


var ages = arrayCal(years, calAge);
var fullAge = arrayCal(ages, calFullAge);
var HeartRate= arrayCal(ages, maxHeartRat);
console.log(ages,fullAge, HeartRate);

// IIFE (immidiate invoked function expression)

// function
// function Game(){
//     var score = Math.random() * 10;
//     console.log(score>=5);
// }

// Game();

//IIFE (used for Data Privacy)
(function (){
    var score = Math.random() * 10;
    console.log(score>=5);
})();

// console.log(score);

(function (goodluck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5);


// Closures

function retirement(retirementAge){
    var a=' years left until retirement.';
    return function(yearOfBirth){
        var age=2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1997);

var retirementGer = retirement(65);
retirementGer(1997);
//retirement(66)(1997);


function interviewQustion(job){
    return function(name){
        if(job === 'Engineer'){
            console.log(name+' can you explain IOT?');
        }else if(job === 'Teacher'){
            console.log(name+' Do you agree with Modern teaching techniques?');
        }else{
            console.log(name+' can you explain what you do?');
        }
    }
}
var John = interviewQustion('Teacher');
John('John');

// Bind, Call and Apply

var John = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeofDay){
        if(style === 'formal'){
            console.log('Good '+timeofDay+' Ladies and Gentlemen! I\'m '+this.name+' I\'m a '+this.job+' I\'m '+this.age+' year old');
        }else if(style === 'friendly'){
            console.log('Hey! What\'s up? I\'m '+this.name+' I\'m a '+this.job+' I\'m '+this.age+' years old');
        }
    }
};

John.presentation('formal', 'morning');

var Emily ={
    name: 'Emily',
    age: 24,
    job: 'Frontend Developer'
};

// call Method.
John.presentation.call(Emily, 'friendly', 'afternoon');

// Apply Method
John.presentation.apply(Emily, ['friendly', 'afternoon']);

// Bind Method