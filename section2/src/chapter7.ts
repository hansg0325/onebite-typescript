// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
// a = 1;
// a = "hello";
// a = {};
a = undefined; //void 타입일 경우 undefined 만 가능, tsconfig.json 의 strictNullchecks false일 경우 null 도 가능

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  while(true) {}
}

function func4(): never {
  throw new Error();
}

let anyVar: any;
let b: never;
// never 타입은 그 어떤 값도 담을 수 없음
// b = 1;
// b = {};
// b = "";
// b = undefined;
// b = null;
// b = anyVar;