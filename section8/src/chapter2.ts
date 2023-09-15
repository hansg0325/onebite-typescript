/**
 * keyof 연산자
 */

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) { // Person 인터페이스 안의 프로퍼티의 키들을 유니온타입으로 추출("name" | "age")
  return person[key]
}

const person: Person = {
  name: "한석규",
  age: 27,
}

getPropertyKey(person, "name");