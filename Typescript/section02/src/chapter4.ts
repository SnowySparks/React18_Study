type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "REACT",
  nickname: "안녕하세요",
  birth: "1992.12.23",
  bio: "안녕하세요",
  location: "부산시",
};

// 인덱스 시그니처
type CountryCode = {
  [key: string]: string;
};

let countryCodes: CountryCode = {
  Korea: "Ko",
  UniteState: "us",
};

type CountryNumberCodes = {
  [key: string]: number;
  korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  korea: 123,
  UK: 123456,
};
