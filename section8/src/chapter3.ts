/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type BooleanUser = {
  [key in keyof User]:boolean;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
}

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser():ReadonlyUser {
  // .. 기능
  return {
    id: 1,
    name: "한석규",
    age: 27
  };
}
const user = fetchUser();
// user.id = 1; // readonly 로 설정해서 수정 불가능

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ...수정하는기능
}

updateUser({
  // id: 1,
  // name: "한석규",
  age: 27,
})