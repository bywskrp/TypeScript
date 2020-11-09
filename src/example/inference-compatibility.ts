// function merge(arg1: number, arg2: number): number
// function merge(arg1: string, arg2: string): string
// function merge(arg1: any, arg2: any): any {
//   return arg1 + arg2
// }

// class AnimalClass {
//   public static age: number
//   constructor(name: string) {}
// }

// const mergeFunc = <K, U>(arg1: K, arg2: U): K & U => {
//   let res1 = {} as K & U
//   res1 = Object.assign(arg1, arg2)
//   return res1
// }

// const a = {
//   a: 'a'
// }
// const b = {  
//   b: 'b'
// }

// console.log(mergeFunc(a, b).a)

const getLengthFunc = (content: string | number): number {
  if (typeof content === 'string') {return content.length}
  else {return content.toString().length}
}

getLengthFunc('123')
