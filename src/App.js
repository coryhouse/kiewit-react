import React from "react";
import Home from "./Home";
import Nav from "./Nav";
import Courses from "./Courses";
import { Route } from "react-router-dom";
import ManageCourse from "./ManageCourse";

const App = () => {
  return (
    <>
      <Nav />
      <Route path="/" component={Home} exact />
      <Route path="/courses" component={Courses} />
      <Route path="/course" component={ManageCourse} />
    </>
  );
};

export default App;
