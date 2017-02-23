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


