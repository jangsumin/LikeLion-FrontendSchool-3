const body = document.querySelector("body");
let div = document.createElement("div");

div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "black";
// 이미지를 스무스하게 움직이기 위함.
div.style.transition = "0.2s";

body.appendChild(div);

let pos = 0;

document.addEventListener('keydown', move);

function move(event) {
    const keyName = event.key;
    if (keyName === "ArrowRight") {
        pos += 5;
        div.style.transform = `translateX(${pos}px)`;
    }
    if (keyName === "ArrowLeft") {
        pos -= 5;
        div.style.transform = `translateX(${pos}px)`;
    }
}