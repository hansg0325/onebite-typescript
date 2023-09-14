/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a:number, b: number) {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */

function introduce(name = "한석규", age:number, tall?: number){ //선택적 매개변수는 제일 마지막에 와야한다
  console.log(`name : ${name}`);
  // console.log(`tall : ${tall + 10}`); tall 이 undefined 일수도있기때문에 + 10같은 연산 불가능
  if(typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("한석규",27,  178);
introduce("한석규", 27);

// ...rest 문법 : 가변적인 길이의 인수를 전달하면 배열로 묶어 rest에 저장
function getSum(...rest:number[]){
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); //6
getSum(1, 2, 3, 4, 5); //15