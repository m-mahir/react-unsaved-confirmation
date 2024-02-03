import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

const NavBar: FC = () => {
  return (
    <>
      <nav className="top-nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
