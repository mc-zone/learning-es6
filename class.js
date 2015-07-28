'use strict';

class Person{
	constructor(name,sex){
		this.name = name;
		this.sex = sex;
	};

	getSex(){
		return this.sex;
	};
	
	setAge(age){
		this.age = age;
	};

	getAge(){
		return this.age;
	};

	//static
	static getTime(){
		return Date.now();
	}
};

let person = new Person('zhang');
person.setAge(15);
console.log(person.getAge());
console.log(Person.getTime());

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
console.log(Teacher.getTime());//static

//获取父类
console.log( Object.getPrototypeOf(Teacher) === Person );

//继承原生类
class MyArray extends Array {
  constructor() {
    super();
  }
}

var arr = new MyArray();
arr[0] = 12;
console.log( arr.length );

arr.length = 0;
console.log( arr[0] );

//get set
class Square {
	constructor(width){
		this.width = width;
	}
	get area(){
		console.log('try to get area ');
		return this.width*this.width;
	}

	set area(val){
		console.log('set area as:',val);
		this.width = Math.sqrt(val);
		console.log('width changed to:',this.width);

	}
};

let sq = new Square(20);
console.log(sq.area);
sq.area = 100;

//get set 在descriptor对象上
var descriptor = Object.getOwnPropertyDescriptor(Square.prototype, "area");
console.log(descriptor);
