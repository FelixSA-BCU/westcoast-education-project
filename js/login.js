import { getUsers } from "./api.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async function(event){

event.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const users = await getUsers();

const user = users.find(
u => u.email === email && u.password === password
);

if(user){

localStorage.setItem("user", JSON.stringify(user));

alert("Inloggad!");

window.location.href = "index.html";

}
else{

alert("Fel email eller lösenord");

}

});