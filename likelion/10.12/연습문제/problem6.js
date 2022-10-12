// 숫자에 단위 콤마 표시하고, 삭제하기.
let won = 100000000;
let temp = [];
let str = '';

// 표시하기
const arr = String(won).split("").reverse();
for (let i=0; i < arr.length; i++) {
    if(i % 3 === 0 && i !== 0) {
        temp.push(',');
    }
    temp.push(arr[i]);
}

str = temp.reverse().join("");

console.log(str);

// 제거하기

// let 숫자 = prompt("숫자를 콤마로 구분하여 입력해주세요.").split("");
// console.log(숫자.filter((a) => a !== ",").join(""));

let temp2 = '';
function deleteComma(temp) {
    const arr2 = temp.split("");
    //console.log(arr2);
    for (const i in arr2) {
      if (arr2[i] === ",") {
        continue;
      } else {
        temp2 += arr2[i];
      }
    }
    
    return parseInt(temp2, 10);
}

console.log(deleteComma(str));