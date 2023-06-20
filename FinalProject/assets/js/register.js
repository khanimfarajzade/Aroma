const registerForm = document.querySelector(".registerForm");
const user = document.getElementById("user");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const confirmPass = document.getElementById("confirmPass");
let array = [];


if (JSON.parse(localStorage.getItem("Data")) !== null) {
  array = JSON.parse(localStorage.getItem("Data"));
}

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const obj = {
    name: user.value,
    email: email.value,
    pass: pass.value,
    confirmPass: confirmPass.value,
  };

  array.push(obj);
  let register_result = false;
  console.log(array);
  if (JSON.parse(localStorage.getItem("Data")) !== null) {
    for (let i = 0; i < JSON.parse(localStorage.getItem("Data")).length; i++) {
      console.log(JSON.parse(localStorage.getItem("Data"))[i].name);
      if (JSON.parse(localStorage.getItem("Data"))[i].name === user.value) {
        register_result = true;
      } else {
        register_result = false;
      }
    }





    if (pass.value !== confirmPass.value) {
      alert("Password or login is not true");
    } else if (register_result) {
      alert("user already exists");
    } else {
      localStorage.setItem("Data", JSON.stringify(array));
     // window.location.href = "login.html";
     window.open('login.html');
    }
  } else {
    localStorage.setItem("Data", JSON.stringify(array));
  }
});



// localStorage.clear()


