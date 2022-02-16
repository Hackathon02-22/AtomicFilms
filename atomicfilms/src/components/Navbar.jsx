import React from "react";
import SearchBox from "./SearchBox";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav class="navbar navbar-light bg-dark navbar-expand-lg p-3 fixed-top col-12">
      <div class="container-fluid">
        <a class="navbar-brand">
          <span class="text-white">Atomic</span>
          <span class="text-danger">Films</span>
        </a>
        <SearchBox />
        <NavItems />
      </div>
    </nav>
  );
};

export default Navbar;
