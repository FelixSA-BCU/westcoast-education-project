function initAuth(){

const authButton = document.getElementById("authButton");

if (!authButton) return;

const user = localStorage.getItem("user");

if (user) {

authButton.textContent = "Logga ut";

authButton.addEventListener("click", function(){

localStorage.removeItem("user");

window.location.href = "index.html";

});

}
else{

authButton.textContent = "Logga in";

authButton.addEventListener("click", function(){

window.location.href = "login.html";

});

}

}

initAuth();