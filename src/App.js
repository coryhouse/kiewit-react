import React from "react";

class App extends React.Component {
  state = {
    courses: [
      { id: 1, title: "Clean Code" },
      { id: 2, title: "React Fundamentals" }
    ]
  };

  renderTable() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {this.state.courses.map(course => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <>
        <h1>Courses</h1>
        <ul>{this.renderTable()}</ul>
      </>
    );
  }
}

export default App;
