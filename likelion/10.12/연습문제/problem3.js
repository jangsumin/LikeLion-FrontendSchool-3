// 연습문제 3, array의 각 자리수의 합을 구하시오.
let givenNum = [11, 22, 33, 111, 2];

console.log(givenNum.map(el => String(el)).join("").split("").reduce((a, b) => a + parseInt(b, 10), 0));