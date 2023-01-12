var signupBtn = document.querySelector(".signupBtn");
var loginBtn = document.querySelector(".loginBtn");
var moveBtn = document.querySelector(".moveBtn");
var signUp = document.getElementById("signup");
var login = document.getElementById("login");

loginBtn.addEventListener("click",()=>{
    moveBtn.classList.add("rightBtn");
    login.classList.add("loginForm");
    signUp.classList.remove("signupForm");
    moveBtn.innerHTML = "Login";
});

signupBtn.addEventListener("click",()=>{
    moveBtn.classList.remove("rightBtn");
    login.classList.remove("loginForm");
    signUp.classList.add("signupForm");
    moveBtn.innerHTML = "Sign Up";

});


function signUpPanel(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    

    localStorage.setItem("userName1", name);
    localStorage.setItem("userEmail1", email);
    localStorage.setItem("userPass1", password);
};


function loginPanel(e) {
    e.preventDefault();
    var loginEmail = document.getElementById("login-email").value;
    var loginPass = document.getElementById("login-pass").value;
    
   var email1 = localStorage.getItem("userEmail1");
   var password1 = localStorage.getItem("userPass1");

    if(loginEmail == email1 && loginPass == password1) {
        alert('"alsk');
        window.location.href="quiz.html";
    }else{
        alert("Please Input Correct Pass or Email!")
    }
    
};


