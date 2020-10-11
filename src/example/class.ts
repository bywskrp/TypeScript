// class Point {
//   x: number
//   y: number
//   constructor (x: number, y: number) {
//     this.x = x
//     this.y = y
//   }
//   getPosition () {
//     return `${this.x}, ${this.y}`
//   }
// }
// const p = new Point(1, 2)
// console.log(p)

// class Parent {
//   name: string
//   constructor (name) {
//     this.name = name
//   }
// }
// class Child extends Parent {
//   constructor (name: string) {
//     super(name)
//   }
// }

// public 公共
// private 私有的
// protected 受保护的

// class Parent {
//   private age: number
//   constructor (age: number) {
//     this.age = age
//   }
//   protected
// }
// const p = new Parent(18)
// // console.log(p.age)
// // console.log(Parent.age)

class A {
  constructor(protected name: string) { }
}
// const a1 = new A('wxh')
// console.log(a1)

class Parent {
  public static getAge() {
    return Parent.age
  }
  private static age: number = 18
  constructor () { }
}
const p = new Parent()
// console.log(p.age);
// console.log(Parent.age);

class Info {
  public name: string
  public age?: number
  private _infoStr: string
  constructor (name: string, age?: number, public sex?: string) {
    this.name = name
    this.age = age
  }
  get infoStr () {
    return this._infoStr
  }
  set infoStr (value) {
    console.log(`setter: ${value}`)
    this._infoStr = value
  }
}
const info1 = new Info('wxh')
const info2 = new Info('wxh', 18)
const info3 = new Info('wxh', 18, 'man')
info3.infoStr = "wxh"
console.log(info3.infoStr);