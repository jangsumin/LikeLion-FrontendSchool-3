const body = document.querySelector("body");
let div = document.createElement("div");

div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "black";

body.appendChild(div);
let pos = 0;

document.addEventListener("keydown", move);
document.addEventListener("keyup", stop);

let keys = {};

function move(event) {
    keys[event.key] = true;
};

function stop(event) {
    keys[event.key] = false;
};

function play() {
    if (keys.ArrowLeft) {
        pos -= 2;
        div.style.transform = `translateX(${pos}px)`;
    }
    if (keys.ArrowRight) {
        pos += 2;
        div.style.transform = `translateX(${pos}px)`;
    }
    window.requestAnimationFrame(play);
};

window.requestAnimationFrame(play);