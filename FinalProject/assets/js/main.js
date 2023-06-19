let basket_arr = [];
let wishlist_arr = [];

fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element, y) => {
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
      cardTrend.classList.add("cardTrend");
      productImgDiv.classList.add("productImgDiv");
      hoverProductBasket.classList.add("hoverProductBasket");
      productBasketBox.classList.add("productBasketBox");
      productNameDiv.classList.add("productNameDiv");
      const basket_btn = document.createElement("div");
      const wishlist_btn = document.createElement("div");
      

      //inner
      basket_btn.innerHTML =`<i class="fa-solid fa-cart-shopping"></i>`;
       wishlist_btn.innerHTML = `<i class="fa fa-regular fa-heart "></i>`;
      console.log("seklin urli", img.src);
      img.src = data[y].src;

      productBasketBox.innerHTML = `<i class="fa fa-solid fa-search"></i>`;
      p.innerHTML = data[y].category;
      h4.innerHTML = `<a href="./assets/pages/product.html" target="_blank">${data[y].name}</a>`;
      span.innerHTML = `$${data[y].price}`;

     

      
      
      if (wishlist_arr.find((x) => x.id == data.id) !== undefined) {
       
        wishlist_btn.style.backgroundColor = "red";

      }
      // basket
      basket_btn.onclick = function () {
        //eger bu idli elemnent yoxdursa push et
        if (basket_arr.find((x) => x.id == data.id) === undefined) {
          basket_arr.push({ ...data, count: 1 });
        }
        localStorage.setItem("basket", JSON.stringify(basket_arr));
      };
      // wishlist

      wishlist_btn.onclick = () => {
        if (wishlist_arr.find((x) => x.id == data[y].id) === undefined) {
          wishlist_arr.push(data);
          wishlist_btn.style.backgroundColor = "red";
        } else {
          wishlist_arr = wishlist_arr.filter((x) => x.id !== data.id);
          wishlist_btn.style.backgroundColor = "white";
        }
        localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
      };


      //append
      trendingProductContainer.appendChild(cardTrend);
    
      cardTrend.append(productImgDiv, productNameDiv);
      productImgDiv.append(img, hoverProductBasket);
      hoverProductBasket.appendChild(productBasketBox);
      productBasketBox.append(basket_btn, wishlist_btn)
      productNameDiv.append(p, h4, span);
    });
  });




  // eger data varsa localstorage
  window.onload = function () {
    if (localStorage.getItem("basket") !== null) {
      basket_arr = JSON.parse(localStorage.getItem("basket"));
    }
    if (localStorage.getItem("wishlist") !== null) {
      wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));
    }
  };
