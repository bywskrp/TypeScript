// function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
//   return o[name]
// }

// interface Obj<T> {
//   [key: string]: T
// }

// let keys: Obj<number> = {
//   age: number
// }

interface Type {
  a: never
  b: never
  c: string
  d: number
  f: null
  g: object
}
type Test = Type[keyof Type]

interface Info1 {
  age: number
  name: string
  sex: string
}
type ReadonlyType<T> = {
  readonly [P in keyof T]: T[P]
}
type RemoveonlyType<T> = {
  -readonly [P in keyof T]: T[P]
}
type ReadonlyInfo1 = ReadonlyType<Info1>
type RemoveonlyInfo1 = RemoveonlyType<ReadonlyInfo1>

let info11: ReadonlyInfo1 = {
  age: 20,
  name: 'wxh',
  sex: 'man'
}

// info11.age = 20
