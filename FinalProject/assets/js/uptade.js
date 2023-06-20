const url = document.querySelector("#url");
const prdName = document.querySelector("#prdName");
const price = document.querySelector("#price");
const category = document.querySelector("#category");
const description = document.querySelector("#description");
const myForm = document.querySelector(".myForm");

myForm.addEventListener("submit" ,function (e) {
   
    e.preventDefault();
   fetch("http://localhost:3000/products" ,{
    
    method: "POST",
  body: JSON.stringify({
   
    name: prdName.value,
    price: price.value,
    category: category.value,
    src: url.value,
    description: description.value
  }),
  
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
   })
   .then(res =>res.json())
   .then(
    data =>{
        console.log(data);
    }
   )
  
})

