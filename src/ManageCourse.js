import React, { useState, useEffect } from "react";
import { saveCourse } from "./api/courseApi";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { course } from "./propTypes";
import { toast } from "react-toastify";

function ManageCourse({ courses, loadCourses, match }) {
  const [course, setCourse] = useState({
    title: "",
    authorId: null,
    category: ""
  });
  const [redirectToCoursesPage, setRedirectToCoursesPage] = useState(false);

  // useEffect(() => {
  //   const effect = async () => {
  //     const { slug } = match.params;
  //     if (slug) {
  //       if (courses.length === 0) await loadCourses();
  //       const course = courses.find(course => course.slug === slug);
  //       this.setState({ course });
  //     }
  //   };
  //   effect();
  // }, [courses, loadCourses, match.params]);

  useEffect(() => {
    const { slug } = match.params;
    if (slug) {
      if (courses.length === 0) {
        loadCourses().then(_courses => {
          setCourse(getCourseBySlug(_courses, slug));
        });
      } else {
        setCourse(getCourseBySlug(courses, slug));
      }
    }

    function getCourseBySlug(courses, slug) {
      const course = courses.find(course => course.slug === slug);
      return course;
    }
  }, [courses, loadCourses, match.params]);

  function handleChange(event) {
    const newCourse = { ...course };
    newCourse[event.target.name] =
      event.target.name === "authorId"
        ? parseInt(event.target.value, 10)
        : event.target.value;
    setCourse(newCourse);
  }

  // Hipster.js
  //   handleChange = ({ target }) => {
  //     const course = {
  //       ...course,
  //       [target.name]: target.value
  //     };
  //     setCourse({ course });
  //   };

  function handleSubmit(event) {
    event.preventDefault(); // hey browser, don't post back.
    saveCourse(course).then(() => {
      // load courses again so that the saved record is reflected on the courses page
      loadCourses();
      setRedirectToCoursesPage(true);
      toast.success("Course saved! 🎉");
    });
  }

  if (redirectToCoursesPage) return <Redirect to="/courses" />;

  return (
    <>
      <h1>Manage Course</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input
            id="title"
            type="text"
            name="title"
            onChange={handleChange}
            value={course.title}
          />
        </div>

        <div>
          <label htmlFor="authorId">Author Id</label>
          <br />
          <input
            id="authorId"
            type="text"
            name="authorId"
            onChange={handleChange}
            value={course.authorId || ""}
          />
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <br />
          <input
            id="category"
            type="text"
            name="category"
            onChange={handleChange}
            value={course.category}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Save" />
      </form>
    </>
  );
}

ManageCourse.propTypes = {
  courses: PropTypes.arrayOf(course).isRequired,
  loadCourses: PropTypes.func.isRequired
};

export default ManageCourse;
