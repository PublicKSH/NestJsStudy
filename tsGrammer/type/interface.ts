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
