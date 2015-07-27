'use strict';

var s = new Set();
[2,3,5,4,5,2,2].map(x => s.add(x))
console.log(s.size)
for (let i of s) {console.log(i)}//unique

var items = new Set([1,2,3,4,'4',{},{},null,{a:'123'}]);

items.has(2)
items.has('2')
items.has({})

console.log(Set.prototype[Symbol.iterator] === Set.prototype.values);

console.log('for of');
for (let i of items) {console.log(i)}

console.log('keys');
for(let v of items.keys()){
  console.log(v);
}
console.log('values');
for(let v of items.values()){
  console.log(v);
}
console.log('entries');
for(let v of items.entries()){
  console.log(v);
}

//to array
// var arr = Array.from(items);
// var arr2 = [...items];
