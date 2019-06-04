import React from "react";
import * as courseApi from "./api/courseApi";

class App extends React.Component {
  state = {
    courses: []
  };

  componentDidMount() {
    courseApi.getCourses().then(courses => this.setState({ courses: courses }));
  }

  deleteCourse(courseId) {
    courseApi.deleteCourse(courseId).then(() => {
      const courses = this.state.courses.filter(
        course => course.id !== courseId
      );
      this.setState({ courses: courses });
    });
  }

  renderTable() {
    return (
      <table>
        <thead>
          <tr>
            <th />
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {this.state.courses.map(course => (
            <tr key={course.id}>
              <td>
                <button onClick={() => this.deleteCourse(course.id)}>
                  Delete
                </button>
              </td>
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
