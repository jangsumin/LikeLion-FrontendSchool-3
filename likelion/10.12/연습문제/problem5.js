// 로또 만들기, Math.random은 0이상 1미만의 값이 추출된다!
// console.log(Math.floor(Math.random()*45));
console.log([0, 1, 2, 3, 4, 5].map(el => Math.floor(Math.random()*45) + 1));