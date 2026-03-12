import { createBooking } from "./api.js";

const user = localStorage.getItem("user");

if(!user){

alert("Du måste logga in först");

window.location.href = "login.html";

}

const params = new URLSearchParams(window.location.search);
const courseId = params.get("courseId");

const form = document.getElementById("bookingForm");

form.addEventListener("submit", async function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const booking = {

    courseId: courseId,
    name: name,
    address: address,
    email: email,
    phone: phone

  };

  await createBooking(booking);

  alert("Bokning genomförd!");

});