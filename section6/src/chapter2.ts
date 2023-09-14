/**
 * 접근 제어자
 * access modifier
 * => public / private / protected
*/

class Employee {
  //필드
  private name: string;
  protected age: number;
  position: string;

  //생성자
  constructor(name:string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //매서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  //필드
  officeNumber: number;

  //생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
  //매서드
  func() {
    // this.name; // private 라서 파생클래스 내에서도 접근 불가능
    this.age; // protected 는 파생클래스에서는 접근 가능
  }
}

const employee = new Employee("한석규", 27, "developer");
// employee.name = "가나다"; // private 라서 클래스 밖에서 접근 불가능
// employee.age = 30; // protected 라서 클래스 밖에서 접근 불가능
employee.position = "디자이너";
