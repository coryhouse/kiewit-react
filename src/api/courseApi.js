export function getCourses() {
  return fetch("http://localhost:3001/courses").then(response => {
    // now the api call is done
    // response contains the response from the server
    if (response.ok) return response.json();
    throw new Error("Network response was not ok.");
  });
}

export function deleteCourse(courseId) {
  return fetch("http://localhost:3001/courses/" + courseId, {
    method: "DELETE"
  }).then(response => {
    // now the api call is done
    // response contains the response from the server
    if (response.ok) return response.json();
    throw new Error("Network response was not ok.");
  });
}
