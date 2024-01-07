async function getProductsData(){
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    console.log(data);

    const productContainer = document.getElementById("container");
    data.map(product =>{
    const card = document.createElement("div");
    card.className = ("cards");
    card.innerHTML = `
    <div class="product-image"><img src="${product.image}"></div>
    <h2>${product.title}</h2>
    <div class="price"><p>$${product.price}</p></div>
    <p>${product.description}</p>
    `
    productContainer.appendChild(card);
});
}

getProductsData();