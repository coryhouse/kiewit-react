import React from "react";
import Home from "./Home";
import Nav from "./Nav";
import Courses from "./Courses";

const App = () => {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/courses") return <Courses />;
    return <Home />;
  }

  return (
    <>
      <Nav />
      {getPage()}
    </>
  );
};

export default App;
