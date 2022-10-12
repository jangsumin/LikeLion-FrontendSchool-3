// 다음 string의 평균값을 구하세요
let givenStr = '5, 4, 10, 2, 5';

let arrayStr = givenStr.split(', ').map(el => parseInt(el, 10));

console.log(arrayStr.reduce((a, b) => a + b, 0)/arrayStr.length);