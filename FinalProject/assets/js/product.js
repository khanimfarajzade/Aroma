const spc = document.querySelector("#spc");
const cmnt = document.querySelector("#cmnt");
const specification = document.querySelector(".specification");
const comments = document.querySelector(".comments");

spc.addEventListener("click" , function () {
    comments.style.display ="none";
    specification.style.display ="block";
});

cmnt.addEventListener("click" , function () {
    //alert("hi");
    specification.style.display ="none";
    comments.style.display ="block";
   
});
