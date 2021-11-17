const link = document.querySelectorAll(".nav-link");
const linkText = document.querySelector("#change-link li");
const linkBody = document.querySelectorAll(".select-body");
const linkColor = document.querySelector(".main-body .body-nav");
const menuNav = document.querySelector("#bodyNavMenu");
const menuSidebar = document.querySelector("#mainSidebar");
const mainBody = document.querySelector("#mainBody");

//obj
const obj = { Stats: "#e06c45", Details: "darksalmon", Schedule: "rgb(194, 228, 216)", Add: "#fef9f8" };
var selected;
//events 
menuNav.addEventListener("click", (e) => {
    e.preventDefault();
    menuSidebar.classList.toggle("main-sidebar-active");
    mainBody.classList.toggle("main-body-active");
});

document.addEventListener("DOMContentLoaded", (e)=> {
    //link[2].classList.add("nav-link-active");
    linkColor.style.background = obj.Schedule;
});

//functions