// 문자열 뒤집기
let str = "hello world!";

// console.log(str.split("").reverse().join(""));

// 함수를 구현해보자.
function reverseStr(str) {
    let temp = '';
    for(let i=str.length - 1; i>=0; i--) {
        temp += str[i];
    }

    return temp;
}

console.log(reverseStr(str));