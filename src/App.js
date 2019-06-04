import React from "react";
import * as courseApi from "./api/courseApi";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

class App extends React.Component {
  state = {
    courses: []
  };

  componentDidMount() {
    courseApi.getCourses().then(courses => this.setState({ courses: courses }));
  }

  deleteCourse(courseId) {
    courseApi
      .deleteCourse(courseId)
      .then(() => {
        const courses = this.state.courses.filter(
          course => course.id !== courseId
        );
        this.setState({ courses: courses });
      })
      .catch(error =>
        toast.error("🦄 Sorry, delete failed. Please reload and try again.")
      );
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
        <ToastContainer />
        <ul>{this.renderTable()}</ul>
      </>
    );
  }
}

export default App;
