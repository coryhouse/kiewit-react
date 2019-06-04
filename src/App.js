import React from "react";
import Home from "./Home";
import Nav from "./Nav";
import Courses from "./Courses";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <Route path="/" component={Home} exact />
      <Route path="/courses" component={Courses} />
    </>
  );
};

export default App;
