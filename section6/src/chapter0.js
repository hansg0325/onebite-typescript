/**
 * 클래스
 */

let studentA = {
  name: "한석규",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //매서드
  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name} 입니다!`);
  }
}

class StudentDeveloper extends Student {
  //필드
  favoriteSkill;

  //생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age)
    this.favoriteSkill = favoriteSkill;
  }

  //매서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("한석규", "A+", 27);
console.log(studentB);
studentB.study();
studentB.introduce();

const studentDeveloper = new StudentDeveloper("한석규", "A+", 27, "JAVA");
console.log(studentDeveloper);
studentDeveloper.programming();