/**
 * 타입스크립트의 클래스
 */
const employee = {
    name: "한석규",
    age: 27,
    position: "developer",
    work() {
        console.log("일함");
    },
};
class Employee {
    //필드
    name;
    age;
    position;
    //생성자
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    work() {
        console.log("일함");
    }
}
const employeeB = new Employee("한석규", 27, "개발자");
console.log(employeeB);
employeeB.work();
export {};
