/**
 * 제네릭
 */

// 제네릭 함수
function func<T>(value: T) : T { //<T> : 타입 변수
  return value;
}

let num = func(10);

let bool = func(true);

let str = func("string");

let arr = func<[number, number, number]>([1, 2, 3]);