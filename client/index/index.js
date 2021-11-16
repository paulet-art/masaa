//global var
const menu = document.getElementById("main-dropdown");
const mainNavList = document.querySelector(".main-nav-list");
const mainNav = document.querySelector(".main-nav");
const body = document.querySelector(".main-body-all");
// main-nav-active
//main-nav-list-active
//events

menu.addEventListener("click", (e) => {
    e.preventDefault();
    mainNav.classList.toggle("main-nav-active");
    mainNavList.classList.toggle("main-nav-list-active");
    body.classList.toggle("main-body-all-active");
});


//functions
