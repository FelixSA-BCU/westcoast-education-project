const BASE_URL = "http://localhost:3000";

export async function getCourses() {
  const response = await fetch(`${BASE_URL}/courses`);
  return response.json();
}
export async function getCourse(id) {
  const response = await fetch(`${BASE_URL}/courses/${id}`);
  return response.json();
}
export async function createBooking(booking) {
  return fetch(`${BASE_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(booking)
  });
}
export async function createCourse(course) {
  return fetch(`${BASE_URL}/courses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(course)
  });
}
export async function getBookings() {
  const response = await fetch(`${BASE_URL}/bookings`);
  return response.json();
}
export async function createUser(user) {
  return fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
}
export async function getUsers() {
  const response = await fetch(`${BASE_URL}/users`);
  return response.json();
}