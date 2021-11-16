const signupBtn = document.getElementById("signup");
const loginBtn = document.getElementById("login");
const signupDiv = document.querySelector(".main-div-signup");
const loginDiv = document.querySelector(".main-div-login");
//validate
const submitBtn = document.getElementById("submit");
const loadDiv = document.querySelector(".login-load");
const submitBtnSignup = document.getElementById("submit-signup");
const loadDivSignup = document.querySelector(".signup-load");
//events
signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signupDiv.classList.add("main-div-signup-active");
    loginDiv.classList.add("main-div-login-active");
    document.body.classList.add("body-active");
    
})
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signupDiv.classList.remove("main-div-signup-active");
    loginDiv.classList.remove("main-div-login-active");
    document.body.classList.remove("body-active");
})
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loadDiv.classList.add("login-load-active");
        submitBtn.classList.add("submit");
});
submitBtnSignup.addEventListener("click", (e) => {
        e.preventDefault();
        loadDivSignup.classList.add("signup-load-active");
            submitBtnSignup.classList.add("submit");
        });
    


//functions