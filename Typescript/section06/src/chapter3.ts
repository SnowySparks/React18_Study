interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Charactor implements CharacterInterface {
  name: string;
  moveSpeed: number;

  constructor(name: string, moveSpped: number) {
    this.name = name;
    this.moveSpeed = moveSpped;
  }

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
