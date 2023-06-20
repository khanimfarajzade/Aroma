submitbtn.addEventListener("click", async () => {
    console.log("test");
    if (nameinput.value == "" || email.value == "" || textarea.value == "") {
      alert("Inputlari tam doldurun");
    } else {
      let obj = {};
      await fetch(`http://localhost:3000/Product/${id}/`)
        .then((res) => res.json())
        .then((data) => {
          obj = data;
          obj.review = textarea.value;
          obj.commentname = nameinput.value;
          obj.email = email.value;
        });
  
      await fetch(`http://localhost:3000/Product/${id}/`, {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    }
  });