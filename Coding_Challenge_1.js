var hieghtMark, weightMark, hieghtJohn, weightJohn, bmiMark, bmiJohn;
hieghtMark = 1.72;
weightMark = 90;
bmiMark = weightMark/(Math.pow(hieghtMark,2));

hieghtJohn = 1.60
weightJohn = 78;
bmiJohn = weightJohn/(Math.pow(hieghtJohn,2));
console.log(bmiJohn,bmiMark);
//var bmiHigh = bmiJohn > bmiMark;
//console.log(bmiHigh);

if(bmiMark>bmiJohn){
    console.log('Mark\'s BMI is higher than John\'s' );
}
else{
    console.log('John\'s BMI is higher than Mark\'s' );
}