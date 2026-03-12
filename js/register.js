import { createUser } from "./api.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async function(event){

event.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const user = {
name,
email,
password
};

await createUser(user);

alert("Konto skapat!");

window.location.href = "login.html";

});