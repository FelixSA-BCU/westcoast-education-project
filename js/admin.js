import { createCourse, getCourses, getBookings } from "./api.js";

const form = document.getElementById("courseForm");
const bookingList = document.getElementById("bookingList");

form.addEventListener("submit", async function(event){

  
  event.preventDefault();

  const title = document.getElementById("title").value;
  const courseNumber = document.getElementById("courseNumber").value;
  const days = document.getElementById("days").value;
  const price = document.getElementById("price").value;

  const date = document.getElementById("date").value;
  const type = document.getElementById("type").value;
  const image = document.getElementById("image").value;

  const newCourse = {
    title,
    courseNumber,
    days,
    price,
    date,
    type,
    image
  };

  await createCourse(newCourse);
  alert("Kurs skapad");

});

async function loadBookings(){

  const courses = await getCourses();
  const bookings = await getBookings();

  courses.forEach(course => {

    const courseDiv = document.createElement("div");

    courseDiv.innerHTML = `<h3>${course.title}</h3>`;

    const courseBookings = bookings.filter(
      booking => booking.courseId == course.id
    );


    courseBookings.forEach(booking => {

      const p = document.createElement("p");

      p.textContent = booking.name;

      courseDiv.appendChild(p);

    });

    bookingList.appendChild(courseDiv);

  });

}

loadBookings();