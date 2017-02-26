/**
 * Created by -rom- on 23.02.2017.
 */

//noinspection InfiniteLoopJS
/*

for ( i=0;i < 5; i++){
console.log(i);
}
*/
var mas=[45,2,75,4,5];
var max=0 , min=0;
for (i=0;i<mas.length;i++){
    if(mas[i]>mas[i+1]){
        max=mas[i];

    }

}
console.log("max elem = "+max);

console.log("<------------------->");

var document ={
    title:"title",
    body:"body",
    footer:"footer",

    wish: {
        title:"Bogusj",
        body:"bibodl"
    }
};

console.log(document.title + "<---> " + document.wish.title)



console.log("<------------------->");


function Box(h,w,d,m) {
    this.height=h;
    this.wight=w;
    this.dept=d;
    this.material=m;
}
Box.prototype.getEquals=function (differObj) {
   if(this.height==differObj.height&&this.wight==differObj.wight){
       return true;
    }else{
       return false
   }
}
Box.prototype.getSquare = function () {
    return this.height*this.dept*this.height;
}

var box1 = new Box(3,1,2,1);
var box2 = new Box(3,3,3,3);
console.log("box1 = "+ box1.getSquare() + " and box2 ="+box2.getSquare());
var equal = box1.getEquals(box2);
console.log("result of equals = " + equal);


