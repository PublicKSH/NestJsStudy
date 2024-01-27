// 1. 변수 선언 방식
// [선언 키워드] [변수명] : [타입]

// 2. 타입 종류

// 2-1. 원시 타입
// 생략

// 2-2. 객체 타입
const dextor = {
  name: 'Dexter Han',
  age: 21,
  hobby: ['Movie', 'Billiards'],
};
// Date, Array, Set, Map, JSON 등등

// 2-3. 함수 타입
const func = () => {};
console.log(typeof func === 'function');

// 2-4. typescript 만의 타입
// any, unknown, never
let anyType: any;
let unknownType: unknown;
let neverType: never;
type NonString<T> = T extends string ? never : T;

// 3. 타입 정의하기
// 변수를 인터페이스로 선언 가능
interface User {
  name: string;
  age: number;
}

// 인터페이스는 class로 선언 할 수 있다.
class User2 {
  constructor(name: string, age: number) {}
}

const user: User = {
  name: '1',
  age: 1,
};

const user2: User2 = new User2('1', 1);

console.log('user', user);
console.log('user2', user2);

// 4. 타입 구성하기
// 유니언 타입 (여러 타입을 조합한 타입)
function getLength(obj: string | string[]): number {
  return obj.length;
}

type Status = 'Ready' | 'Waiting';
// 열거형으로도 유니언 타입 활용 가능
enum Status2 {
  READY = 'Ready',
  WAITING = 'Waiting',
}
console.log(getLength('1515'));
console.log(getLength(['1', '2']));

// 제레닉 타입
function identity(arg: arg): arg {
  return arg; // 어떤 값이 들어오든 arg 로 반환
}

function identity2<T>(arg: T): T {
  return arg; // 어떤 값에 해당하는 type으로 반환
}
