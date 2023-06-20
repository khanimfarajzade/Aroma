const allCreateBtn = document.querySelector(".allCreateBtn")
// alert("hi") ;
fetch("http://localhost:3000/products")
  .then(res => res.json())
  .then(
    data => {
      for (let i = 0; i < data.length; i++) {


        // deyisenler
        const productTable = document.querySelector(".productTable");
        const tbody = document.querySelector(".tbody");
        const productTr = document.createElement("tr");
        const productNum = document.createElement("td");
        const productName = document.createElement("td");
        const category = document.createElement("td");
        const price = document.createElement("td");
        const imgtd = document.createElement("td");
        const img = document.createElement("img");
        const deletTd = document.createElement("td");
        const editTd = document.createElement("td");
        const delet = document.createElement("button");
        const edit = document.createElement("button");
       


console.log(data[i].id);

        delet.onclick = function () {
            fetch("http://localhost:3000/products/" + data[i].id, {
          method: "DELETE",
        })
          .then((res) => res.text()) // or res.json()
          .then((res) => console.log(res));
         // productTr.remove()
        };


        edit.addEventListener("click", function () {
          const editInput = document.createElement("input");
          editTd.appendChild(editInput);
          const editInputBtn = document.createElement("button");
          editTd.appendChild(editInputBtn);
          editInput.classList.add("bg");
          editInputBtn.classList.add("btnClick");
          // editInput.innerText = "edit"
          editInputBtn.innerText = "click";
          editInputBtn.addEventListener("click", function () {
            price.innerText = editInput.value;
            editInput.style.display ="none";
            editInputBtn.style.display ="none";
            // cardHeading.classList.add("name");

          })


        })
        //inner hissesi
        productNum.innerText = i + 1;
        productName.innerText = data[i].name;
        category.innerText = `${data[i].category}`;
        price.innerText = `${data[i].price}$`;
        img.src = data[i].src
        delet.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        edit.innerText = "Edit";

        //add class
        edit.classList.add("editBtn");
        delet.classList.add("deleteBtn");


        //append hissesi   
        tbody.appendChild(productTr);
        productTable.appendChild(tbody);
        productTr.append(productNum,imgtd,productName,category,price)
        imgtd.appendChild(img);
        productTr.appendChild(deletTd);
        deletTd.appendChild(delet);
        productTr.appendChild(editTd);
        editTd.appendChild(edit);

        //style hissesi
        img.style.height = "50px";
        img.style.width = "80px";

        //   editInput.style.backgroundColor ="yellow";

      }






    }

  );



