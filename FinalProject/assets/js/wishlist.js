const wishlist_container = document.getElementById("wishlist_container");
let wishlist_arr = [];
wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));

wishlist_arr.forEach((element) => {
  const div = document.createElement("div");
  const img__div = document.createElement("img");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const btn = document.createElement("button");

  //div.style.border = "1px solid black";
console.log("xetani tap" , wishlist_arr);
  h1.innerHTML = element.name;
  p.innerHTML = `${element.price}$`
  img__div.src = element.src;

  btn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

  //add class
  img__div.classList.add("img_div");
  div.classList.add("wishContainer");
  wishlist_container.classList.add("wishlist_container")


  btn.onclick = () => {
    console.log(element.id);
    wishlist_arr = wishlist_arr.filter((x) => x.id !== element.id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
    btn.parentElement.remove();
  };

  div.append(img__div, h1, p, btn);
  wishlist_container.append(div);
});