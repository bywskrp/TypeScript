// es5
// function Point(x, y) {
//   this.x = x
//   this.y = y
// }

// Point.prototype.getPostion = function () {
//   return '(' + this.x + ',' + this.y + ')'
// }

// var p1 = new Point(2, 3)
// console.log(p1) 
// console.log(p1.getPostion())

// var p2 = new Point(4, 5)
// console.log(p2.getPostion())

// es6
// class Point {
//   constructor (x, y) {
//     this.x = x
//     this.y = y
//   }

//   getPoint () {
//     return `(${this.x}, ${this.y})`
//   }
// }

// const p1 = new Point(1, 2)
// console.log(p1 instanceof Point);
// console.log(p1.hasOwnProperty('x'));
// console.log(p1.hasOwnProperty('getPoint'));
// console.log(p1.__proto__.hasOwnProperty('getPoint'));

// var info = {
//   _age: 18,

//   set age (newValue) {
//     console.log(`新设置的值为：${newValue}`);
//     this._age = newValue
//     return this._age
//   },

//   get age () {
//     return this._age
//   }
// }

// console.log(info.age)
// info.age = 20
// console.log(info.age)

class Info {
  constructor (age) {
    this._age = age
  }

  set age (newValue) {
    console.log(`新设置的值为：${newValue}`);
    this._age = newValue
    return this._age
  }

  get age () {
    return this._age
  }
}

const infos = new Info(18)
infos.age = 25
console.log(infos.age)



 