var quant=1, price=2 , discount=0.93,cost=0;

cost=quant>=0 ? quant*price*1.01 : quant*price*discount;
console.log(cost);


// HomeWork
//Task # 1

var a=1 , b=4,sum=0;

while (a<b){
    sum=sum+a;
    a++;
    console.log("sum nub = "+ sum);

}
console.log(sum);

console.log("======");

for (a=1;a<b;a++){
    if(a%2){
        console.log(a);
    }else {
        console.log("-")
    }
}

//============
//Task 2
console.log("==========")
var number=2, variant=1;

while (number<6){
    variant=variant*number;
    number++;
}
console.log("Count of variants = " + variant);


//Task 3
console.log("==========")
var i=0;
while (i<5){
    console.log(i);
    i++;
}

