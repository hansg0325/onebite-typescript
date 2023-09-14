/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person; //person을 Person type이라고 간주하라고 알려줌
person.name = "한석규";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name : "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog; 

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; //never는 모든타입의 서브타입이므로 타입 단언 가능
let num2 = 10 as unknown; // unknown 타입은 모든타입의 슈퍼타입이므로 타입 단언 가능

// let num3 = 10 as string; // string 타입은 number 타입의 슈퍼타입이거나 서브타입이 아니기 때문에
let num3 = 10 as unknown as string; // 다중 단언, 사용하지 않는것을 권장

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; 

// cat.name = " "; //const 로 단언된 객체의 모든 프로퍼티는 readonly 가 되어 값 수정 불가

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string; // ? 는 선택적 프로퍼티 있어도되고 없어도 됨
}

let post : Post = {
  title: "게시글1",
  author : "한석규",
};

//number 타입은 undefined 값을 담을 수 없어서 오류
// ? : author가 없거나 null 이면 값 전체가 undefined
// const let: number = post.author?.length;

// ! : author 의 값은 null이 아닐것이라고 믿도록 만듬
const len: number = post.author!.length;