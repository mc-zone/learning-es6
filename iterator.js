'use strict';

let arr = [1,2,4];
let it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


/*
function fun(){
    for(let i of arguments){
        console.log(i);
    }
}
fun(1,2);
*/

for (let x of 'a\uD83D\uDC0A') {
  console.log(x);
}

let obj = {"a":123,b:456};
obj.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
for (let i of obj) {
    console.log(i);
}
