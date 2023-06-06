const burgerBtn= document.querySelector(".burgerBtn");
const mobilList= document.querySelector(".mobilList");
burgerBtn.addEventListener("click" ,function () {
    mobilList.classList.toggle("list");
})