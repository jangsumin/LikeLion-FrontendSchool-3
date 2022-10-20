const object = {a : 1, b : 2};

// const a = object.a;
// const b = object.b;

// 비구조화 할당 : 객체에 있는 값들을 변수나 상수에 할당
// 객체이 있는 값 뿐만 아니라 배열에 있는 값도 가능
const {a, b} = object;

console.log(a);
console.log(b);