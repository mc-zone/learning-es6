'use strict';


let m = new Map();
let obj1 = {a:123},
    obj2 = {};

m.set(obj1,'o1')
 .set(obj2,'o2')
 .set([1,2,3],'o3');

console.log(m.has(obj1));
console.log(m.get(obj1));
console.log(m.has(obj2));
console.log(m.get(obj2));
/*
obj1=obj2;
console.log(m.has(obj1));
console.log(m.get(obj1));
process.exit(0);
*/

//keys
for(let i of m.keys()){
    console.log(i);
}

//entries
for(let i of m.entries()){
    console.log(i);
}


//values
for(let i of m.values()){
    console.log(i);
}

//default iterator
console.log(m[Symbol.iterator]);

//forEach
m.forEach(function(v,k,map){
    console.log(k,v);
});

//WeakMap

let wm = new WeakMap();
wm.set(obj1,'o1');
console.log(wm.has(obj1));
obj1=null;
try{
for(let i of m.keys()){
    console.log(i);
}
console.log(wm.has(obj1));
}catch(e){console.log(e)}
