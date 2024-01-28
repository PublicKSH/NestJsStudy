function deco(target: any, propertyKey: string, descriptor: PropertyDecorator) {
  console.log('데커레이터가 평가됨');
}

class TestClass {
  //   @deco
  test() {
    console.log('함수 호출됨');
  }
}

const t = new TestClass();
t.test();
