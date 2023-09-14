/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "한석규",
  profile: {
    nickname: "HAN",
  },
  urls: ["www.google.com"],
};

let {id, name, profile} = c;

let [one, two, three] = [1, "hello", true];

function func(message="hello") {
  return "hello";
}

// 아무것도 선언하지 않았을 경우 any 타입
let d;

d = 10; // 10으로 선언 후 d 는 number 타입으로 추론, any -> number
d.toFixed();
// d.toUpperCase() // number 타입으로 추론되어 toUpperCase() 불가능

d="hello"; //string 으로 초기화, number -> string
d.toUpperCase(); //이후 d는 string 타입으로 추론
// d.toFixed(); // string 타입으로 추론되어 toFixed() 불가능

//const로 선언했을 경우, const 는 상수이기때문에
const num = 10; // number 타입이 아니라 10이라는 리터럴 타입
const str = "hello" //string 타입이 아닌 hello 라는 리터럴 타입

let arr = [1, "string"]; // 자동으로 union 타입으로 추론