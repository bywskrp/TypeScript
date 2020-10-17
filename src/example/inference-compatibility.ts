function merge(arg1: number, arg2: number): number
function merge(arg1: string, arg2: string): string
function merge(arg1: any, arg2: any): any {
  return arg1 + arg2
}

class AnimalClass {
  public static age: number
  constructor(name: string) {}
}