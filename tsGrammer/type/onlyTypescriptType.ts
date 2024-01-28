// 2-4. typescript 만의 타입
// any, unknown, never
let anyType: any;
let unknownType: unknown;
let neverType: never;
type NonString<T> = T extends string ? never : T;
