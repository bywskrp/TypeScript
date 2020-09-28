let bool: boolean = false
let num: number = 123
let str: string = "abc"

// 数组
let arr1: number[]
let arr2: Array<number>

// 元祖类型
let tuple: [string, number, boolean]
tuple = ["wxh", 1, true]

// 枚举类型
enum Roles {
  SUPER_ANMIN,
  ADMIN,
  USER
}
let roles: number = 0
if (roles === Roles.SUPER_ANMIN) {}

// any类型
let value: any
value = 123
value = "123"
value = false

// void类型
const consoleText = (text: string): void => {
  console.log(text)
}

consoleText("abc")

// null类型与undefined类型
// null类型与undefined类型 是其他类型的子类型
let u: undefined
u = undefined
// u = 123

let n: null
n = null
// n = 123

num = undefined

// object 类型

function consoleObject(obj: object): void {
  console.log(obj)
}

consoleObject({ name: "wxh" })


// 类型断言
function getLength(target: string | number): number {
  if ((<string>target).length || (target as string).length === 0) {
    return (target as string).length
  } else {
    return target.toString().length
  }
}

getLength("123")
// getLength(false)

