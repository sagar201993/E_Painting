import React from "react";
import logo2 from "../images/logo2.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <details>
                  <summary>Services</summary>
                  <ul className="p-2">
                    <li>
                      <Link to="/interior">Interior Painting</Link>
                    </li>
                    <li>
                      <Link to="/exterior">Exterior Painting</Link>
                    </li>
                    <li>
                      <Link to="/cabinet">Cabinet Painting</Link>
                    </li>

                    <li>
                      <Link to="/apartment">Apartment Painting</Link>
                    </li>
                    <li>
                      <Link to="/fence">Fence Painting</Link>
                    </li>

                    <li>
                      <Link to="/driveway">Driveway Painting</Link>
                    </li>
                    <li>
                      <Link to="/epoxy">Epoxy Painting</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/register">Register with us</Link>
              </li>
              <li>
                <Link to="/login">Sign In</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img src={logo2} alt="Logo" className="h-[75px] w-32 mx-4" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <details>
                <summary>Our Services</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/interior">Interior Painting</Link>
                  </li>
                  <li>
                    <Link to="/exterior">Exterior Painting</Link>
                  </li>
                  <li>
                    <Link to="/cabinet">Cabinet Painting</Link>
                  </li>

                  <li>
                    <Link to="/apartment">Apartment Painting</Link>
                  </li>
                  <li>
                    <Link to="/fence">Fence Painting</Link>
                  </li>

                  <li>
                    <Link to="/driveway">Driveway Painting</Link>
                  </li>
                  <li>
                    <Link to="/epoxy">Epoxy Painting</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/register">Register with us</Link>
            </li>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
