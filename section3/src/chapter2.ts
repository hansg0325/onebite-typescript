/**
 * Unknown 타입
 */

// unknown 타입은 모든 타입의 슈퍼타입
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // unknown 타입은 업캐스팅은 되지만 다운캐스팅은 안됨
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/**
 * Never 타입
 */

// Never 타입은 모든 타입의 서브 타입

function neverExam() {

  //반환 할 수 있는 값의 종류가 없을경우 never 타입
  function neverFunc(): never {
    while(true) {}
  }

  // 업캐스팅 가능
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운캐스팅은 불가능
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
}

/**
 * void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  // void 타입은 undefined 타입의 슈퍼 타입
  let voidVar: void = undefined;
}

/**
 * any 타입
 */

// 치트키 타입 : any 타입은 모든 타입의 슈퍼 타입 이자 모든 타입의 서브 타입(never 제외)
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // any 타입은 업캐스팅, 다운캐스팅 둘다 가능
  anyVar = unknownVar;
  undefinedVar = anyVar;

  // never 타입은 어떤 타입으로도 다운캐스팅 불가능, any 타입으로 도 불가
  // neverVar = anyVar;
}