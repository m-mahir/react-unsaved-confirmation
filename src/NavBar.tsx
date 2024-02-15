import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./NavBar.css";

const NavBar: FC = () => {
  return (
    <>
      <nav className="top-nav-bar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/form">Form</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
