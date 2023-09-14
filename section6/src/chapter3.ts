/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}


class Charcter implements CharacterInterface{

  // 인터페이스로 정의하는 필드들은 모두 public. private 혹은 protected 로 하면 오류가 발생남
  constructor(public name: string, public moveSpeed: number) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}