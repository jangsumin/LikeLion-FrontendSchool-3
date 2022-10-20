function sayHello() {
    return new Promise((resolve) => {
        resolve("hello!!");
    });
}

async function test() {
    // sayHello() 함수가 실행될 때까지 기다리겠다.
    const hello1 = await sayHello();
    console.log(hello1);
}

test();