const link = document.querySelectorAll(".nav-link");
const linkText = document.querySelector("#change-link li");
const linkBody = document.querySelectorAll(".select-body");
const linkColor = document.querySelector(".main-body .body-nav");
//obj
const obj = { Stats: "#e06c45", Details: "darksalmon", Schedule: "rgb(194, 228, 216)", Add: "#fef9f8" };
var selected;
//events 
link.forEach(
    (elem) => {
        elem.addEventListener("click", (e) => {
            e.preventDefault();
            selected = e.target.innerHTML;
            linkText.innerHTML = selected;
            linkText.href = elem.href;
            linkBody.forEach(
                element => {
                    
                    if (element.classList.contains("main-active-section") && element.childNodes[1].childNodes[1].childNodes[1].innerHTML === e.target.innerHTML) {
                      
                    } else {
                        if (element.classList.contains("main-active-section")) {
                            element.classList.add("main-not-active-section");
                            element.classList.remove("main-active-section");
                            
                        }else if (element.childNodes[1].childNodes[1].childNodes[1].innerText === e.target.innerHTML) {
                            element.classList.add("main-active-section");
                            element.classList.remove("main-not-active-section");
                            element.classList.remove("main-all-section");
                            console.log(element.childNodes[1].childNodes[1].childNodes[1].innerText)
                            switch (element.childNodes[1].childNodes[1].childNodes[1].innerText) {
                                case "Add schedule":
                                    linkColor.style.background = obj.Add;
                                    break;
                                case "Details":
                                    linkColor.style.background = obj.Details;
                                    break;
                                case "Schedule":
                                    linkColor.style.background = obj.Schedule;
                                    break;
                                case "Stats":
                                    linkColor.style.background = obj.Stats;
                                    break;
                                default:
                                    break;
                            }
                            
                            
                            
                        }
                    } if (element.classList.contains("main-not-active-section")) {
                        element.classList.add("main-all-section");
                        element.classList.remove("main-not-active-section");
                    }
                    
                    
                    // if (element.classList.contains("main-not-active-section")) {
                    //         element.classList.add("main-active-section");
                    //         element.classList.remove("main-not-active-section");
                    // }
                    
                }

            );
            
        });
            elem.addEventListener("focus", (e) => {
                e.preventDefault();
                link.forEach(
                    element => {
                        element.classList.remove("nav-link-active");
                    }
                );
                elem.classList.toggle("nav-link-active");
            });
        
    }
);
document.addEventListener("DOMContentLoaded", (e)=> {
    link[2].classList.add("nav-link-active");
});
    

//functions