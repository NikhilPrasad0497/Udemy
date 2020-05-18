var firstName1 = 'John';
var firstName2 = 'Mike';
var firstName3 = 'Mary';

var johnGame1 = 89;
var mikeGame1 = 116;
var maryGame1 = 97;

var johnGame2 = 120;
var mikeGame2 = 94;
var maryGame2 = 134;

var johnGame3 = 103;
var mikeGame3 = 123;
var maryGame3 = 105;

var average1 = (johnGame1+johnGame2+johnGame3)/3;
var average2 = (mikeGame1+mikeGame2+mikeGame3)/3;
var average3 = (maryGame1+maryGame2+maryGame3)/3;

console.log(firstName1+'\'s average is '+ average1);
console.log(firstName2+'\'s average is '+average2);
console.log(firstName3+'\'s average is '+average3);

if(average1>average2 && average1 > average3){
    console.log(firstName1+' is the winner ');
}
else if(average2>average1 && average2>average3){
    console.log(firstName2+' is the winner');
}
else if(average3>average1 && average3>average2){
    console.log(firstName3+' is winner');
}