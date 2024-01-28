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
