import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const location = useLocation();
  console.log(location.pathname, "currentPath");
  const pathName = location.pathname;
  const user_type = useSelector((state) => state.user).user_type;

  console.log(user_type, "user_type");
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-sky-800 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              ERP System
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            {user_type === "CLIENT_ADMIN" ? (
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                    <Link to="/departments">
                      <span className="ml-2">Departments</span>
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                    <Link to="/signup">
                      <span className="ml-2">Accounts</span>
                    </Link>
                  </a>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
}
