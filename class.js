'use strict';

let funcName = 'getSex';
class Person{
	constructor(name,sex){
		this.name = name;
		this.sex = sex;
	};

	getName(){
		return this.name;
	};
	
	setAge(age){
		this.age = age;
	};

	getAge(){
		return this.age;
	};

	[funcName](){
		return this.sex;
	}	
};

let person = new Person('zhang');
person.setAge(15);
console.log(person.getAge());

//枚举
Person.prototype.getName = function() {
  return this.name;
}
console.log( Object.keys(Person.prototype) )

//extend
class Teacher extends Person{
	constructor(name,sex,type){
		super(name,sex);
		this.type = type;
	}
}

let teacher = new Teacher('wang','female','English');
console.log(teacher.getName());

//获取父类
console.log( Object.getPrototypeOf(Teacher) === Person );

//继承原生类
class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
}

var arr = new MyArray();
arr[0] = 12;
arr.length // 1

arr.length = 0;
arr[0] // undefined


//get set
class Make {
	constructor(prop){
		this.prop = prop;
	};

	get(key){
		console.log('try to get '+key);
		return this.key;
	};
	set(key,val){
		this[key] = val;
		console.log('try to set '+key+'to:',val);
	};

	get prop(){
		console.log('prop is:',prop);
		return this.prop;
	};

	set prop(val){
		this.prop = val;
		console.log('set prop as:',val);
	};
};

var 

