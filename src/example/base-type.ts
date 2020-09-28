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