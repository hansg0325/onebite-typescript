/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 = Union 타입
 */

let a: string | number | boolean;
a = 1;
a = "hello";

a = true;

let arr:  (number | string | boolean)[] = [1, "hello", true];

// type Dog = {
//   name: string;
//   color: string;
// };

// type Person = {
//   name: string;
//   language: string;
// };

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
}

let union2: Union1 = {
  name: "",
  language: ""
}

let union3: Union1 = {
  name: "",
  color: "",
  language: ""
}

// 그 어디에도 속하지않는 타입
// let union4: Union1 = {
//   name: "",
// }

/**
 * 2. 교집합 타입 = Intersection 타입
 */

let varibale: number & string;

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

// 모든타입을 다 가지고 있어야함
let Intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
