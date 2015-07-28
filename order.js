"use strict"

//仅块内有效
if(true){
	let a = 100;
	var b = 10;

	console.log(a)
	console.log(b)
}
try{
console.log(a)
}catch(e){console.log(e)}
console.log(b)

//TDZ暂时性死区
var aa = 111;
if(true){
	try{
		typeof aa;
	}catch(e){console.log(e)}
	try{
		aa = 3;
	}catch(e){console.log(e)}

	let aa = 3;
}

//不允许重复声明
function func(arg) {
	try{
	let arg;
	}catch(e){console.log(e)}
	console.log(arg)
	{
		let arg; // 不报错
	}
}

func(123);

//块级作用域
for(var i=0;i<5;i++){
	setTimeout(function(){
		console.log(i);
	})
}
//IIFE
for(var i=0;i<5;i++){
	(function(i){
		setTimeout(function(){
			console.log(i);
		})
	})(i)
}
for(let i=0;i<5;i++){
	setTimeout(function(){
		console.log(i);
	})
}

//const
const obj = {};
obj.a = 1234;
console.log(obj);
//obj = {a:1}

//不属于全局变量
let ccc = 1;
console.log(global.ccc);
