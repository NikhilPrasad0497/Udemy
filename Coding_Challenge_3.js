var bill=[124,48,268];

var tiping=function(bill){
    var tip;
    if(bill<50){
        tip=bill*0.20;
    }
    else if(bill<200 && bill>=50){
        tip = bill*0.15;
    }
    else{
        tip = bill*0.10;
    }
    
    return tip;
}
var total=new Array(bill[0]+tiping(bill[0]),bill[1]+tiping(bill[1]),bill[2]+tiping(bill[2]));
console.log(bill);
console.log(total);
