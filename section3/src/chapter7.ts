/**
 * 타입 좁히기
 * 조건부 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
  name: string;
  age: number;
};
// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다
function func(value: number | string | Date | null | Person) {
  value; //union 타입으로 추론
  // value.toUpperCase(); 불가능
  // value.toFixed(); 불가능
  if(typeof value === 'number'){
    console.log(value.toFixed()); //value 타입은 number 타입으로 추론
  }
  else if (typeof value === 'string'){
    console.log(value.toUpperCase()); //value 타입은 string 타입으로 추론
  }
  // else if (typeof value === 'object') { //null 타입도 object이기때문에 Date 타입으로 추론 불가능
  //   console.log(value.getTime()); //그래서 오류, Date인지 null 인지 추론 불가능
  // }
  else if (value instanceof Date){ //value 라는 값이 Date 의 객체인가? Date는 자바스크립트의 내장 '클래스'
    console.log(value.getTime()); //Date타입으로 추론
  }
  // else if(value instanceof Person){// Person은 타입 instaceof 뒤에는 '클래스'만 가능

  // }
  else if (value && "age" in value) { //value 값이 존재하고(true이고) age가 value에 있는가 
    // 모든조건에 부합하면 value는 Person 타입으로 추론 가능
    console.log(`${value.name}은 ${value.age}살 입니다`); //value 타입은 Person
  }
}