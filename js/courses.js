import { getCourses } from "./api.js";

const courseList = document.getElementById("courseList");
const currentContainer = document.getElementById("currentCourses");
const popularContainer = document.getElementById("popularCourses");


function createCourseCard(course){

  const div = document.createElement("div");

  div.innerHTML = `
    <h3>${course.title}</h3>
    <p>${course.days} dagar</p>
    <p>Start: ${course.date}</p>
    <a href="course.html?id=${course.id}">Visa kurs</a>
  `;

  return div;

}

function renderCourses(container, courses){

  courses.forEach(course => {
    container.appendChild(createCourseCard(course));
  });

}

async function loadCourses(){

  const courses = await getCourses();

  const currentCourses = courses.slice(0,2);

  const popularCourses = courses.slice(1,3);

  renderCourses(currentContainer, currentCourses);
  renderCourses(popularContainer, popularCourses);
  renderCourses(courseList, courses);

}

loadCourses();