import React from "react";

function App() {
  const courses = [
    { id: 1, title: "Clean Coder's" },
    { id: 2, title: "React Fundamentals" }
  ];

  // Goal: Render a table with ID and title as headers.
  function renderTable() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr>
              <td>{course.id}</td>
              <td>{course.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <>
      <h1>Courses</h1>
      <ul>{renderTable()}</ul>
    </>
  );
}

export default App;
