/**
 * 선언 합침
 */

// 인터페이스는 중복선언가능, 그리고 합침 가능
interface Person {
  name: string;
}

interface Person {
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 27,
}

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib = {
  a: 1 ,
  b: 2,
  c: "hello",
}