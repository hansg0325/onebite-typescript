/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

// 슈퍼타입
type Animal = {
  name: string;
  color: string;
};

// 서브타입
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};



// 업캐스팅은 가능
animal = dog;

// 다운캐스팅은 불가능
// dog = animal;

// 슈퍼타입
// type Book = {
//   name: string;
//   price: number;
// };

// 서브타입
type ProgramingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programingBook: ProgramingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programingBook;
// programingBook = book; //다운 캐스팅은 불가능

/**
 * 초과 프로퍼티 검사
 */

type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",  // 프로퍼티 초과되는지 검사, 초과되면 오류, 
}
