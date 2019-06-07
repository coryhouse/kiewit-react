import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

const Nav = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      {user && (
        <li>
          {user.email} <button onClick={() => setUser(null)}>Logout</button>
        </li>
      )}
    </ul>
  );
};

export default Nav;
