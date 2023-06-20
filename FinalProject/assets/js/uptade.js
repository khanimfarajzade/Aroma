const url = document.querySelector("#url");
const prd__Name = document.querySelector("#prd__Name");
const price = document.querySelector("#price");
const category = document.querySelector("#category");
const description = document.querySelector("#description");
const myForm = document.querySelector(".myForm");

fetch(`http://localhost:3000/products/`+window.location.hash.slice(1))
.then(res => res.json())
.then(data => {
  url.value = data.src;
  prd__Name.value = data.name;
  price.value = data.price;
  category.value = data.category;
  description.value = data.description;
})


console.log(`http://localhost:3000/products/`+window.location.hash.slice(1));
myForm.addEventListener("submit" ,async (e) => {
 
    e.preventDefault();
  let obj = {}; 
 
  await fetch(`http://localhost:3000/products/`+window.location.hash.slice(1))
        .then((res) => res.json())
        .then((data) => {
          obj = data;
          obj.name = prd__Name.value;
          obj.price = price.value;
          obj.category = category.value;
          obj.src = url.value;
          obj.description = description.value;
        });
        await fetch(`http://localhost:3000/products/`+window.location.hash.slice(1), {
          method: "PUT",
          body: JSON.stringify(obj),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

  
});



