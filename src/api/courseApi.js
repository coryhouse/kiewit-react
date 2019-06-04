import { handleResponse, handleError } from "./apiUtils";

export async function getCourses() {
  // This line will pause until the fetch promise resolves (until the API call completes)
  try {
    const response = await fetch(BASE_URL + "courses");
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
}

export function deleteCourse(courseId) {
  return fetch("http://localhost:3001/courses/" + courseId, {
    method: "DELETE"
  })
    .then(handleResponse)
    .catch(handleError);
}
