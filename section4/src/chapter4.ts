/**
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal:Animal): animal is Dog { // true 를 반환한다면 animal은 Dog 타입
  return (animal as Dog).isBark !== undefined //animal 을 Dog 라고 단언
}

function isCat(animal:Animal): animal is Cat { // true 를 반환한다면 animal은 Dog 타입
  return (animal as Cat).isScratch !== undefined //animal 을 Dog 라고 단언
}

function warning(animal: Animal) {
  if(isDog(animal)) {
    // 강아지
    animal
  } else if ("isScratch" in animal) {
    // 고양이
  }
}