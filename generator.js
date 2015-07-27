"use strict"
var http = require('http');
//generator

function* helloGen() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var h = helloGen();//返回个Iterator (指针)
// console.log(h.next());
// console.log(h.next());
// console.log(h.next());

function* add(x){
	var a = 2 * (yield (x+1));
	var b = yield (a+2);
	return a+b;
}
var aa = add(2);
var step1 = aa.next(); //2+1 = 3
var step2 = aa.next(4);//4*2+2 = 10
var step3 = aa.next(5);//4*2+5 = 13
console.log(step1.value);
console.log(step2.value);
console.log(step3.value);

//直接用 for of (不会包含最后return)
function *loop(x){
	yield x++;
	yield x++;
	yield x++;
	yield x++;
	return x;
}

for (let n of loop(1)){
	console.log(n);
}

//fibonacci
/*
function * fib(){
  let pre = 0, cur = 1;
  for(;;){
    let tmp = cur;
    cur = pre+cur;
    pre = tmp;
    yield cur;

  }
}
for(let n of fib()){
  console.log(n)
  if( n>1000 ) break;
}
*/

//yield*
function* p(fun){
  var a = yield* fun();
  yield 99+a;
}

function* inner(){
  var s = yield 3;
  yield 5+s;
  return 3;
}
var ins = p(inner);
console.log(ins.next());
console.log(ins.next(1));
console.log(ins.next(2));

//async to sync
function getting(path){
  http.get({
    hostname: '127.0.0.1',
    port: 8888,
    path: path
  }, function(res) {
    var rst = '';
    res.on('data',function(data){
      rst += data.toString();
    }).on('end',function(data){
      gen1.next(rst);
    }).on('error',function(err){
      gen1.next(err);
    })
  });
}

function* getData(){
  var rst = yield getting('http://y.qq.com/test/data.js');
  console.log(rst);
}
var gen1 = getData();
gen1.next();



/*
function getDataAsync(){
  getting('http://y.qq.com/test/data.js',function(rst){
    console.log(rst);
  })
}
*/
