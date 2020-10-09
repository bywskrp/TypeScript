// const s1 = Symbol()
// const s2 = Symbol()

// // console.log(s1 === s2) 

// const s3 = Symbol("wxh")
// const s4 = Symbol("wxh")

// // console.log(s3 === s4) 

// console.log(s3)

// let prop = "name"
// const info = {
//   // name: "wxh"
//   [prop]: "wxh"
// }
// console.log(info)

// let s5 = Symbol("name")
// const info2 = {
//   [s5]: "wxh",
//   age: 18,
//   sex: "man"
// }

// console.log(info2)

// // info2[s5] = "sly"

// for (const key in info2) {
//   console.log(key);
// }

// console.log(Object.keys(info2))
// console.log(Object.getOwnPropertyNames(info2))

interface GetProp {
  <T, U extends keyof T>(object: T, prop: U)
}

const getProp: GetProp = (object, prop) => {
  return object[prop]
}

const obj = {
  a: 'a',
  b: 'b'
}

console.log(getProp(obj, 'a'))
console.log(getProp(obj, 'b'))
// console.log(getProp(obj, 'c'))

//  Array.prototype.slice.apply 
function handleData () {
  if (arguments.length === 1) return arguments[0]
  else if (arguments.length === 2) return arguments[0]*arguments[1]
  else return Array.prototype.slice.apply(arguments).join ('_')
}