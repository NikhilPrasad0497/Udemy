// Function constructor

var nikhil={
    name: 'Nikhil',
    yearOfBirth: 1997,
    job: 'Engineer'
};

var Person = function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}


var ashu = new Person('Ashu', 1996, 'MBA');
console.log(ashu);