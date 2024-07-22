// allowJS : True선언 - tsconfig에서

// 클래스 선언
class Student {
  // 필드
  name;
  age;
  grade;

  // 생성자 - 실제 객체 생성 메서드
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  //   메서드

  print() {
    console.log(this.name, this.age, this.grade);
  }

  test() {
    console.log("Hello");
  }
}

// 상속
class StudentDeveloper extends Student {
  favorSkill;

  constructor(name, age, grade, favorSkill) {
    super(name, age, grade);
    this.favorSkill = favorSkill;
  }

  //  메서드 오버라이딩
  print() {
    console.log(this.name, this.age, this.grade, this.favorSkill);
  }

  test() {
    super.test();
    console.log("super호출됨!");
  }
}

// 객체 생성 - 즉 Instance를 생성
const studentA = new Student("React", 12, "A+"); // React 12 A+
studentA.print(); //React 12 A+

const studentDeveloperA = new StudentDeveloper("JS", 12, "B+", "Typescript");
studentDeveloperA.print(); //JS 12 B+ Typescript
studentDeveloperA.test(); //Hello , super호출됨!
