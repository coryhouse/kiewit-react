import { handleResponse, handleError } from "./apiUtils";

export function getCourses() {
  return fetch("http://localhost:3001/courses")
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId) {
  return fetch("http://localhost:3001/courses/" + courseId, {
    method: "DELETE"
  })
    .then(handleResponse)
    .catch(handleError);
}
