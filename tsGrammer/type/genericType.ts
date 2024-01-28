// 제레닉 타입
function identity(argInput: any) {
  return argInput; // 어떤 값이 들어오든 any 로 반환
}

function identity2<T>(argInput: T): T {
  return argInput; // 어떤 값에 해당하는 type으로 반환
}
