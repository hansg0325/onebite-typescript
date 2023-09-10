// obejct
let user: {
  id?: number; // 선택적 프로퍼티(optional property), id가 없어도 되지만 있어야 한다면 type은 number
  name: string;
} = {
  id: 1,
  name: "한석규",
};

let config: {
  readonly apiKey: string; // readonly : 값 수정 불가
} = {
  apiKey: "MY API KEY",
};