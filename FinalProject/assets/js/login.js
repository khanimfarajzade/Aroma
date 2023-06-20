const loginButton = document.querySelector("#loginButton");
const adminLOG = document.querySelector(".adminLOG");
const formMy = document.querySelector(".formMy");
const user = document.getElementById("user");
const pass = document.getElementById("pass");
let arr = [];
arr = JSON.parse(localStorage.getItem("Data"));

let result;
console.log("yoxla");
formMy.addEventListener("submit", function (e)  {
  e.preventDefault();
  console.log("done");

  for (let i = 0; i < arr.length; i++) {
    result = user.value === arr[i].name && pass.value === arr[i].pass;
    
  }


  if (result) {
    window.open('basket.html', '_blank');
  }
   else if (user.value === "admin" && pass.value === "admin1234") {
   window.open('admin.html', '_blank');
  //     //alert("welcome to admin");
   } else{
     alert("User not found");
   }
});


// const login_btn = document.querySelector(".login-btn");
// const user = document.getElementById("user");
// const pass = document.getElementById("pass");
// let arr = [];
// arr = JSON.parse(localStorage.getItem("Data"));

// let result;

// login_btn.addEventListener("click", () => {
//   arr.forEach((element) => {
//     result = user.value === element.name && pass.value === element.pass;
//   });
//   if (result) {
//     window.location.href = "user_page.html";
//   } else if (user.value === "admin" && pass.value === "admin123") {
//     window.location.href = "admin.html";
//   } else {
//     alert("User not found");
//   }
// });