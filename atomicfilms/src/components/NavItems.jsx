import React from "react";

const NavItems = () => {
  return (
    <div className="collapse navbar-collapse" id="mynav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item dropdown me-4">
          <a
            className="nav-link dropdown-toggle text-white nav-item-text"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Home
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                {" "}
                Home One
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Home Two
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Home Three
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Home Four
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Home Five
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Home Dark One
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Home Dark Two
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Home Dark Three
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Home Dark Four
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Home Dark Five
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown me-4">
          <a
            className="nav-link dropdown-toggle text-white nav-item-text"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Pages
          </a>
          <ul class="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Hand Wash
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Social Distance
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Blog Details
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
