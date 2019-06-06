import { handleResponse, handleError } from "./apiUtils";

// Option 1 - Using .env file
const BASE_URL = process.env.REACT_APP_API_BASE_URL + "courses/";

// Option 2 - Sniff the URL (pseudocode)
// if (url contains localhost) {
//   set base URL to http://localhost:3000
// } else {
//   prod.com
// }

// Option 3: Set env var in npm script

// Other ideas: https://www.freecodecamp.org/news/environment-settings-in-javascript-apps-c5f9744282b6/

export async function getCourses() {
  // This line will pause until the fetch promise resolves (until the API call completes)
  try {
    const response = await fetch(BASE_URL);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
}

export function deleteCourse(courseId) {
  return fetch(BASE_URL + courseId, {
    method: "DELETE"
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveCourse(course) {
  return fetch(course.id ? `${BASE_URL}${course.id}` : BASE_URL, {
    method: course.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(course)
  })
    .then(handleResponse)
    .catch(handleError);
}
