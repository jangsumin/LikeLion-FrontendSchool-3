async function getData(){
    const response = await fetch(`http://test.api.weniv.co.kr/mall`);
    const productData = await(response.json());
    console.log(productData);
    console.log(productData.map((item) => item.productName));
    console.log(productData.map((item) => item.price).filter((item) => item > 10000));

    const main = document.createElement("main");
    productData.forEach(item => {
        const ProductCard = document.createElement("article");
        const productName = document.createElement("h2");
        const productPrice = document.createElement("p");

        productName.textContent = `상품명 : ${item.productName}`;
        productPrice.textContent = `가격 : ${item.price}`;

        ProductCard.appendChild(productName);
        ProductCard.appendChild(productPrice);

        main.appendChild(ProductCard);
    })
    document.body.appendChild(main);
}

getData();