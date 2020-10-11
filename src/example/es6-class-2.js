// es5的继承
// function Food () {
//   this.type = 'food'
// }
// Food.prototype.getType = function () {
//   return this.type
// }
// function Vegetable (name) {
//   this.name = name
// }
// Vegetable.prototype = new Food()
// const tomato = new Vegetable('tomato')
// console.log(tomato.getType())

// class Parent {
//   constructor (name) {
//     this.name = name
//   }
//   getName () {
//     return this.name
//   }
//   static _getName (){
//     return this.name
//   }
// }

// class Child extends Parent {
//   constructor (name, age) {
//     super(name)
//     this.age = age
//   }
// }

// const c = new Child('wxh', 18)
// console.log(c)
// console.log(c.getName())
// console.log(c instanceof Child)
// console.log(c instanceof Parent)
// console.dir(Child)
// console.log(Parent._getName())
// console.log(Child._getName())
// console.log(c._getName())
// console.log(Object.getPrototypeOf(Child) === Parent)


// super作为函数
  // 代表父类的函数constructor
// super作为对象
  // 在普通方法中 -》 父类的原型对象
  // 在静态方法中 -》 父类

// class Parent {
//   constructor () {
//     this.type = 'parent'
//   }
//   getName () {
//     return this.type
//   }
// }
// Parent.getType = () => {
//   return 'is parent'
// }

// class Child extends Parent {
//   constructor () {
//     super()
//     console.log('constructor: ' + super.getName())
//   }
//   getParentName () {
//     console.log('getParentName: ' + super.getName())
//   }
//   static getParentType () {
//     console.log('getParentType: ' + super.getType())
//   }
// }
// const c = new Child()
// c.getParentName()
// Child.getParentType()

class Parent {
  constructor () {
    this.name = 'parent'
  }
  print () {
    console.log(this.name)
  }
}

class Child extends Parent {
  constructor () {
    super()
    this.name = 'child'
  }
  printChild () {
    super.print()
  }
}
const c = new Child()
const p = new Parent()
// c.printChild()
// printChild中的super指向Parent
// Parent中print()中this指向子类的实例

// prototype
// __proto__
var objs = new Object()
// console.log(objs.__proto__ === Object.prototype)

// 子类的__proto__指向父类本身
// 子类的prototype属性的__proto__指向父类的prototype属性
// 实例的__proto__属性的__proto__指向父类实例的__proto__

// console.log(Child.__proto__ === Parent)
// console.log(Child.prototype.__proto__ === Parent.prototype)
// console.log(c.__proto__.__proto__ === p.__proto__)