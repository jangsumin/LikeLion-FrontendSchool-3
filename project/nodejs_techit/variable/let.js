// const 예약어를 써도 똑같이 동작
let hello = "first hello";

if (true) {
    let hello = "second hello";
    console.log(hello);
}

console.log(hello);