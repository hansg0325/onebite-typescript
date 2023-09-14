/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10; // 반환값 = number 타입
let b: B = () => 10; // 반환값 = number 리터럴 타입

a = b; // 업캐스팅은 가능
// b = a; // 다운캐스팅은 불가능


// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// 매개변수의 타입을 기준으로 함수 호환성을 판단할 때는 업캐스팅이 불가능
// c = d;
d = c;

// 객체를 예시로 보면 이해가 된다
// 아래는 예시이다

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
}

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // animal타입에는 color속성이 존재하지 않는다. 그러므로 업캐스팅이 되지 않는다.
// 그러므로 매개변수의 타입을 기준으로 함수 호환성을 판단할때는 업캐스팅이 안된다.
// 오히려 다운캐스팅이 가능하다


// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; 오류가 발생한다. 할당하려고하는 함수의 타입에 매개변수의 개수가 더 적을때만 호환가능