/**
 * 인터페이스의 확장
 */

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  isBark: boolean;
}

const dog : Dog = {
  name: "",
  color: "",
  isBark: true,
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 확장 가능
interface DogCat extends Dog, Cat {

}

const dogCat : DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
}