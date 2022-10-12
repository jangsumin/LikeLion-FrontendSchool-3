// 평균 구하기
let arrayVal = [10, 20, 30, 10, 20, 30, 40, 10];

// console.log(arrayVal.reduce((a, b) => a + b)/arrayVal.length);

let average = arrayVal.reduce(function(a, b) {
    return a + b;
}, 0)/arrayVal.length;

console.log(average);

// 분산 구하기, 분산 => (각 값에 - 평균) ** 2
// map은 기존의 배열을 바꾸지 않아서 새로 할당해야함.
let variance = arrayVal.map(el => (el - average)**2);
console.log(variance);