/**
 * 인터페이스
 */

interface Person {
  readonly name: string; // readonly 가능
  age?: number; // 선택적 프로퍼티도 사용가능
  sayHi(): void;
  sayHi(a:number, b: number): void;
};

const person: Person = {
  name: "한석규",
  age: 27,
  sayHi : function () {
    console.log("hi");
  } // 매서드 타입 정의 가능, 매서드 : 프로퍼티에 저장된 값이 함수
};

person.sayHi();
person.sayHi(1, 2);

