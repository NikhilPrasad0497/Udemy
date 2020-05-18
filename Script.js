//console.log('Hello Nikhil this is external JS file');


/*
// Variables and Datatypes 
var firstName = 'Nikhil';
var lastName = 'Prasad';
var age=24;
var fullAge = true;
var job;
console.log("My name is "+ firstName+' '+lastName);
console.log("My age is "+age);
console.log(fullAge);
console.log(job);
*/

/*
// type coersion and Variable Mutation
var firstName='Nikhil';
var age=24;
console.log(firstName + ' '+ age); //type Coersion

var job, isMarried;
job = 'IT Professional';
isMarried = false;

console.log(firstName + ' is a ' + age +' year old ' +job+ '. Is he Married '+ isMarried);

//variable Mutation
age='twenty four';
*/

/*
//Basic Operators

var currentYear = 2020;
var yearNikhil =currentYear-23;
console.log(yearNikhil);
*/

/*
// Operator Precedence


var now =2020;
var yearNikhil = 1997;
var fullAge = 18;

//Multiple Operators
var isFullAge = now-yearNikhil >=fullAge;
console.log(isFullAge);

//Grouping
var ageNikhil = now-yearNikhil;
var ageSurya = 26;
var average = (ageNikhil + ageSurya) / 2;
console.log(average);

//Multiple Assignments
var x,y;
x = y = (3+5) * 4 - 6 ; //8 * 4 - 6 // 32 - 6 // 26
console.log(x,y);

// More operators
x*=2;
console.log(x);
x+=10;
console.log(x);
x++;
++x;
console.log(x);
*/

/*
IF/ELSE Statements

var firstName = 'Nikhil';
var civilStatus = 'single';

if(civilStatus === 'married'){
    console.log(firstName + ' is married ');
}
else{
    console.log(firstName + ' is single');
}
*/

/*Boolean Logic

var firstName='Nikhil';
var age = 23;
if(age <13){
    console.log("Nikhil is a Boy");
}
else if(age >=13 && age<20){
    console.log("Nikhil is a Teenager");
}
else{
    console.log("Nikhil is an Adult");
}
*/

/*The Ternary Operator and Switch Statements
// ternary operator is used for simplier conditions.

var firstName = 'Nikhil';
var age = 17;
age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice.'); //ternary operator

var drink = age >=18 ? 'beer' : 'juice'; //ternary Operator

console.log(firstName+ ' '+ drink);

// Switch Statements

var job = 'Engineer';
switch(job){
    case 'teacher':
        console.log(firstName + 'teaches language');
        break;
    case 'Engineer':
        console.log(firstName+ ' writes Codes');
        break;
    case 'driver':
        console.log(firstName+' drives a truck');
        break;
    default:
        console.log(firstName+' does something else');
}
*/

/*
Functions

// function Declaration
function calculateAge(birthYear){
    return 2020-birthYear;
}

console.log('My age is '+calculateAge(1997));

function yearsUntillRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65-age;
    console.log(firstName + ' retires in '+ retirement+' years');
}
yearsUntillRetirement(1997, 'Nikhil');

// function Expression
var yearsUntillRetirement = function(year, firstName){
    var age = calculateAge(year);
    var retirement = 65-age;
    console.log(firstName + ' retires in '+ retirement+' years');
}
*/

/*Arrays



// initialize new array
var names = ['Nikhil', 'Vaishnavi', 'Stuti']; // far more used
var years = new Array(1997, 1996, 2001); // index startes with 0.

console.log(names[0], years[0]);
console.log(names, years);
console.log(names.length, years.length);

//mutate array data
names[1] = 'Sudarshan';
names[5]= 'Pranati';
console.log(names);

// Different Data Types
var Nikhil = ['Nikhil', 'Prasad', 1997, 'Engineer', false];
Nikhil.push('blue'); // add array to last of array
Nikhil.unshift('Mr.'); // add data to front of array
Nikhil.pop(); // removes data from last
Nikhil.shift();// removes data from front
console.log(Nikhil.indexOf(1997));
console.log(Nikhil);
var isDesigner=Nikhil.indexOf('designer') === -1 ? 'Nikhil is not a Designer' : 'Nikhil is Designer';
console.log(isDesigner);
*/

/*Objects and Properties



// initialization Object Literal

var Nikhil= {
    firstName: 'Nikhil',
    lastName: 'Prasad',
    birthYear: 1997,
    family:['Sudarshan', 'Pranati', 'Stuti'],
    job: 'Engineer',
    isMarried: false
};
console.log(Nikhil);
console.log(Nikhil.firstName);
var x= 'birthYear';
console.log(Nikhil[x]);
console.log(Nikhil['lastName']);

Nikhil.job='Coder';
Nikhil['isMarried']=true;
console.log(Nikhil);

// new Object Syntax
var jane=new Object();
jane.firstName='Jane';
jane.birthYear=1969;
jane['lastName']= 'Smith';
console.log(jane);
*/

/*
Objects and Methods
var Nikhil= {
    firstName: 'Nikhil',
    lastName: 'Prasad',
    birthYear: 1997,
    family:['Sudarshan', 'Pranati', 'Stuti'],
    job: 'Engineer',
    isMarried: false,
    calAge: function(){
        this.age= 2020-this.birthYear;
    }
};

Nikhil.calAge();
console.log(Nikhil);
*/

/*
Loops and Iteration


// For Loop
for (var i=0; i<10; i++){
    console.log(i);
}

var Nikhil = ['Nikhil', 'Prasad', 1997, 'Engineer', false];

for(var i=0; i<=Nikhil.length-1;i++){
    console.log(Nikhil[i]);
}

// While Loop
console.log('with While Loop');
var i=0;
while(i<Nikhil.length){
    console.log(Nikhil[i])
    i++;
}
*/

//continue and break statements

var Nikhil = ['Nikhil', 'Prasad', 1997, 'Engineer', false];
for(var i=0; i<=Nikhil.length-1;i++){
    if(typeof Nikhil[i] !== 'string') continue;
    console.log(Nikhil[i]);
}

for(var i=0; i<=Nikhil.length-1;i++){
    if(typeof Nikhil[i] !== 'string') break;
    console.log(Nikhil[i]);
}

//Looping Backwards
for(var i= Nikhil.length-1;i>=0;i--){
    console.log(Nikhil[i]);
}