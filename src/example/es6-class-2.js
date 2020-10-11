// es5的继承
function Food () {
  this.type = 'food'
}
Food.prototype.getType = function () {
  return this.type
}
function Vegetable (name) {
  this.name = name
}
Vegetable.prototype = new Food()
const tomato = new Vegetable('tomato')
// console.log(tomato.getType())

class Parent {
  constructor (name) {
    this.name = name
  }
  getName () {
    return this.name
  }
  static _getName (){
    return this.name
  }
}

class Child extends Parent {
  constructor (name, age) {
    super(name)
    this.age = age
  }
}

const c = new Child('wxh', 18)
// console.log(c)
// console.log(c.getName())
// console.log(c instanceof Child)
// console.log(c instanceof Parent)
// console.dir(Child)
// console.log(Parent._getName())
// console.log(Child._getName())
// console.log(c._getName())
// console.log(Object.getPrototypeOf(Child) === Parent)




