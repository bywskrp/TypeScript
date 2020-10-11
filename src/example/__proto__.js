/**
 * 1. 除去object之外 任意对象都有__proto__属性指向它的构造函数prototype属性
 * 2. obje
 */

// 1.
// const arr = new Array(1, 2, 3)
// console.log(arr.__proto__ === Array.prototype)
// console.dir(Array.__proto__ === Object.__proto__)

// 2.
// console.dir(Object)
// console.dir(typeof(Object)) // function
// Object.__proto__指向的是function的prototype 
// console.dir(Object.__proto__ === Function.prototype) // true
// console.dir(Function.__proto__ === Object.__proto__)
// console.dir(Function.__proto__.__proto__)
// console.dir(typeof(Function.__proto__.__proto__)) // object
// console.dir(Function.__proto__.prototype) // undefined
// console.dir(Object.__proto__)
// console.dir(new Object())
// console.dir(typeof(new Object())) // object

// console.dir(typeof(Function.__proto__.__proto__) === typeof(new Object())) // object
// const _objtce = new Object()
// console.dir(_objtce)
// console.dir(new Object())
// console.dir(typeof(new Object()))
// console.dir(new Function())
// console.dir(typeof(new Function()))
// const _f = function () {}
// console.dir(_f)
// console.dir(_f.__proto__)

// 首先 最顶级的 object
// 然后衍生出来的是 Object Function Array
// console.dir(Object)
// console.dir(Function)
// console.dir(Array)
// console.log(`*********************************`)
// console.dir(Object.__proto__)
// console.dir(Function.__proto__)
// console.dir(Array.__proto__)
// console.log(`*********************************`)
// console.dir(typeof(Object.__proto__))
// console.dir(typeof(Function.__proto__))
// console.dir(typeof(Array.__proto__))

var a = {};
console.log(a.prototype);  //undefined
console.log(a.__proto__);  //Object {}

var b = function(){}
console.log(b.prototype);  //b {}
console.log(b.__proto__);  //function() {}

/*1、字面量方式*/
var a = {};
console.log(a.__proto__);  //Object {}

console.log(a.__proto__ === a.constructor.prototype); //true

/*2、构造器方式*/
var A = function(){};
var a = new A();
console.log(a.__proto__); //A {}

console.log(a.__proto__ === a.constructor.prototype); //true

/*3、Object.create()方式*/
var a1 = {a:1}
var a2 = Object.create(a1);
console.log(a2.__proto__); //Object {a: 1}

console.log(a.__proto__ === a.constructor.prototype); //false（此处即为图1中的例外情况）
