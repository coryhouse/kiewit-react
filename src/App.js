import React, { useState } from "react";
import Home from "./Home";
import Nav from "./Nav";
import Courses from "./Courses";
import { Route, Switch } from "react-router-dom";
import ManageCourse from "./ManageCourse";
import * as courseApi from "./api/courseApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [courses, setCourses] = useState([]);

  // Above is equivalent to this:
  // const courseState = useState([]);
  // const courses = courseState[0];
  // const setCourses = courseState[1];

  function loadCourses() {
    return courseApi
      .getCourses()
      .then(courses => setCourses(courses))
      .catch(error =>
        toast.error(
          "🦄 Sorry, loading courses failed. Please try reloading the page. Error:" +
            error.message
        )
      );
  }

  async function deleteCourse(courseId) {
    try {
      await courseApi.deleteCourse(courseId);
      setCourses(courses.filter(course => course.id !== courseId));
      toast.success("🦄🦄Course deleted.");
    } catch (error) {
      toast.error(
        "🦄 Sorry, delete failed. Please reload and try again. Error: " +
          error.message
      );
    }
  }

  return (
    <>
      <ToastContainer />
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route
          path="/courses"
          render={props => (
            <Courses
              loadCourses={loadCourses}
              deleteCourse={deleteCourse}
              courses={courses}
              {...props}
            />
          )}
        />
        <Route
          path="/course/:slug?"
          render={props => (
            <ManageCourse
              {...props}
              loadCourses={loadCourses}
              courses={courses}
            />
          )}
        />
      </Switch>
    </>
  );
};

export default App;
