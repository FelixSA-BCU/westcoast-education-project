import { getCourse } from "./api.js";

const params = new URLSearchParams(window.location.search);
const courseId = params.get("id");

const container = document.getElementById("courseDetails");

async function loadCourse() {

  const course = await getCourse(courseId);

  container.innerHTML = `
  
    <h2>${course.title}</h2>
    <img src="${course.image}" width="300">

    <p>Kursnummer: ${course.courseNumber}</p>
    <p>Antal dagar: ${course.days}</p>
    <p>Pris: ${course.price} kr</p>
    <p>Startdatum: ${course.date}</p>
    <p>Typ: ${course.type}</p>

    <a href="booking.html?courseId=${course.id}">
      Boka kurs
    </a>

  `;

}

loadCourse();