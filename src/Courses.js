import React from "react";
import { Link } from "react-router-dom";

class Courses extends React.Component {
  componentDidMount() {
    this.props.loadCourses();
  }

  renderTable() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th />
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {this.props.courses.map(course => (
            <tr key={course.id}>
              <td>
                <button onClick={() => this.props.deleteCourse(course.id)}>
                  Delete
                </button>
              </td>
              <td>{course.id}</td>
              <td>
                <Link to={"course/" + course.slug}>{course.title}</Link>
              </td>
              <td>{course.category}</td>
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
        {this.renderTable()}
      </>
    );
  }
}

export default Courses;
