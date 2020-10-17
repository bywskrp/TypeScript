enum Animals {
  Dog = 1,
  Cat = 2
}
interface Dog {
  type: Animals.Dog
}
const dog: Dog = {
  type: Animals.Dog
}

// string | number 联合类型
enum Status {
  Off,
  On
}
interface Light {
  status: Status
}
const light: Light = {
  status: Status.Off
}

