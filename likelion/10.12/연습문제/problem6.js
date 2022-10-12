// 숫자에 단위 콤마 표시하고, 삭제하기.
let won = 100000000;
let temp = '';

// 표시하기
const arr = String(won).split("");
for (const i in arr) {
    if(i % 3 === 0 && i / 3 >= 1) {
        temp += ',';
    }
    temp += arr[i];
}

console.log(temp);

// 제거하기
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

console.log(deleteComma(temp));