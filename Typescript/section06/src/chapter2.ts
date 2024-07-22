// 접근제어자
// public, private, protected

// 접근제어자를 직접 선언하지 않은 경우 기본적으로 public

class Employee {
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  work() {
    console.log(this.name, this.age, this.position);
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  func() {
    // this.name; -< private는 파생 클래스 조차도 접근불가
    this.age; // 파생클래스 접근은 가능
  }
}

const employeeA = new Employee("나님", 123, "개발자");
// employeeA.name = "ad2"; - 에러 불가능
// employeeA.age = 123; 불가능
employeeA.position = "Developer"; //가능

console.log(employeeA); //자바 123 개발자
