import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo-white.png';
import './Navbar.css';

function NavBar() {
  return (
    <nav className="navItem">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="logo1" />
        </Link>
      </div>

      <div className="navMenu">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/Order History">Order History</NavLink>
          </li>

          <li>
            <NavLink to="/admin ">Admin</NavLink>
          </li>

          <li>
            <NavLink to="/logout">Logout</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
