
var John={
    fullName: 'John Smith',
    bill: [124, 48, 268, 180, 42],
    tip: [],
    total: [],
    caltip: function(){
        for (var i=0;i<this.bill.length;i++){
            if(this.bill[i] < 50){
                this.tip.push(this.bill[i]*0.2);
            }
            else if(this.bill[i] < 200 && this.bill[i]>50){
                this.tip.push(this.bill[i]*0.15);
            }
            else{
                this.tip.push(this.bill[i]*0.1);
            }
            this.total.push(this.bill[i]+this.tip[i]);
        }
        return this.total;
    }
};
// console.log(John);
// John.caltip();
// console.log(John.tip);
// console.log(John.total);

var Mark={
    fullName: 'Mark Miller',
    bill: [77, 375, 110, 45],
    tip: [],
    total: [],
    caltip: function(){
        for (var i=0;i<this.bill.length;i++){
            if(this.bill[i] < 50){
                this.tip.push(this.bill[i]*0.2);
            }
            else if(this.bill[i] < 200 && this.bill[i]>50){
                this.tip.push(this.bill[i]*0.15);
            }
            else{
                this.tip.push(this.bill[i]*0.1);
            }
            this.total.push(this.bill[i]+this.tip[i]);
        }
        return this.total;
    }
};
// console.log(Mark);
// Mark.caltip();
// console.log(Mark.tip);
// console.log(Mark.total);

function calAverage(tip){
    var sum=0;
    for(var i=0;i<tip.length;i++){
        sum = sum + tip[i];
    }
    return sum/tip.length;
}
John.caltip();
Mark.caltip();
John.average = calAverage(John.tip);
Mark.average = calAverage(Mark.tip);

console.log(John,Mark);
if(John.average>Mark.average){
    console.log(John.fullName+'\'s family pays higher tip, with an average of '+John.average);
}
else if(Mark.average>John.average){
    console.log(Mark.fullName+'\'s family pays higher tip, with an average of '+Mark.average);
}


//var john_bill = [1, 2, 3 , 4]

// function caltip(bill){
//     for (var i=0;i<this.bill.length;i++){
//         if(this.bill < 50){
//             this.tip.push(this.bill*0.2);
//         }
//         else if(this.bill < 200 && this.bill>50){
//             this.tip.push(this.bill*0.15);
//         }
//         else{
//             this.tip.push(this.bill*0.1);
//         }
//         this.total.push(this.bill+this.tip);
//     }
//     return this.total;
// }
// }