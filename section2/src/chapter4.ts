// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
};

let user1: User = {
  id: 1,
  name: "한석규",
  nickname: "Han",
  birth: "1997.03.25",
  bio: "동탄",
};

let user2: User = {
  id: 2,
  name: "가나다",
  nickname: "Kim",
  birth: "2000.12.02",
  bio: "서울",
};

type CountryCodes = {
  [key : string] : string;
};

// 인덱스 시그니처
let countryCodes: CountryCodes = {
  Korea : "ko",
  UnitedState: "us",
  UnitedKingdom: "uk"
};

type CountryNumberCodes = {
  [key: string] : number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
};