fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((x, y) => {
      const trendingProductContainer = document.querySelector(".trendingProductContainer");
      //const bestSellersContainer = document.querySelector(".bestSellersContainer");
      const cardTrend = document.createElement("div");
      const productImgDiv = document.createElement("div");
      const img = document.createElement("img");
      const hoverProductBasket = document.createElement("div");
      const productBasketBox = document.createElement("div");
      const productNameDiv = document.createElement("div");
      const p = document.createElement("p");
      const h4 = document.createElement("h4");
      const span = document.createElement("span");

      //add css
      trendingProductContainer.classList.add("trendingProductContainer");
      //bestSellersContainer.classList.add("bestSellersContainer");
      cardTrend.classList.add("cardTrend");
      productImgDiv.classList.add("productImgDiv");
      hoverProductBasket.classList.add("hoverProductBasket");
      productBasketBox.classList.add("productBasketBox");
      productNameDiv.classList.add("productNameDiv");

      //inner
      console.log("seklin urli", img.src);
      img.src = data[y].src;

      productBasketBox.innerHTML = `<i class="fa fa-solid fa-search"></i>
      <i class="fa-solid fa-cart-shopping"></i>
      <i class="fa fa-regular fa-heart"></i>`;
      p.innerHTML = data[y].category;
      h4.innerHTML = `<a href="./assets/pages/product.html" target="_blank">${data[y].name}</a>`;
      span.innerHTML = `$${data[y].price}`;

      //append
      trendingProductContainer.appendChild(cardTrend);
     // bestSellersContainer.appendChild(cardTrend);
      cardTrend.append(productImgDiv, productNameDiv);
      productImgDiv.append(img, hoverProductBasket);
      hoverProductBasket.appendChild(productBasketBox);
      productNameDiv.append(p, h4, span);
    });
  });
