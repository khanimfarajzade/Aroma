
      const basket_container = document.getElementById("basket_container");
      const h2 = document.querySelector("h2");
      let basket_arr = [];

      basket_arr = JSON.parse(localStorage.getItem("basket"));
      getTotal();
      basket_arr.forEach((element) => {
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const inc = document.createElement("button");
        const p = document.createElement("p");
        const dec = document.createElement("button");
        const del = document.createElement("button");
        const quantity = document.createElement("div");
        const span = document.createElement("span");
        const img = document.createElement("img");
        

        h3.innerHTML = element.name;
        inc.innerHTML = "+";
        p.innerHTML = element.count;
        dec.innerHTML = "-";
        span.innerHTML =`${element.price}$` ;
        img.src = element.src;
        del.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

        //artim
        inc.onclick = () => {
          p.innerHTML++;

          basket_arr[basket_arr.findIndex((x) => element.id === x.id)].count++;
          localStorage.setItem("basket", JSON.stringify(basket_arr));
          getTotal();
        };
        //azalma
        dec.onclick = () => {
          if (p.innerHTML === "1") {
            return;
          }
          p.innerHTML--;

          basket_arr[basket_arr.findIndex((x) => element.id === x.id)].count--;
          localStorage.setItem("basket", JSON.stringify(basket_arr));
          getTotal();
        };
        //delete
        del.onclick = () => {
          basket_arr = basket_arr.filter((x) => x.id !== element.id);
          localStorage.setItem("basket", JSON.stringify(basket_arr));
          getTotal();

          del.parentElement.remove();
        };


        //add class
        div.classList.add("basket_item");
        quantity.classList.add("quantity")


        //append
        quantity.append(inc, p, dec,)
        div.append(img ,h3, quantity, span, del);
        basket_container.append(div);
      });

      function getTotal() {
        h2.innerHTML = basket_arr.reduce(
          (sum, prev) => sum + prev.price * prev.count,
          0 
        ) +"$";
        h2.style.color = "#384aeb";
        h2.style.fontWeight ="bold";
        h2.style.fontSize ="24px"
      }
  