var John={
    firstName: 'John',
    hieght: 1.72,
    weight: 98,
    calBmi: function(){
        this.BMI=this.weight/(Math.pow(this.hieght,2));
    }
};
John.calBmi();
var Mark = {
    firstName: 'Mark',
    hieght: 1.69,
    weight: 100,
    calBmi: function(){
        this.BMI=this.weight/(Math.pow(this.hieght,2));
    }
};
Mark.calBmi();
console.log(John);
console.log(Mark);
if(Mark.BMI>John.BMI){
    console.log(Mark.firstName,Mark.BMI);
}
else if(John.BMI>Mark.BMI){
    console.log(John.firstName,John.BMI);
}
else{
    console.log(John.BMI);
}

