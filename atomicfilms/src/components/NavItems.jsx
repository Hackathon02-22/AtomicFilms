import React from "react";

const NavItems = () => {
  return (
    <div class="collapse navbar-collapse" id="mynav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item dropdown me-4">
          <a
            class="nav-link dropdown-toggle text-white nav-item-text"
            data-bs-toggle="dropdown"
            href="/"
            role="button"
            aria-expanded="false"
          >
            Home
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="/">
                {" "}
                Home
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/favorites">
                Favorites
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
