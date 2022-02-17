import React from "react";
import SearchBox from "./SearchBox";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark navbar-expand-lg p-3 fixed-top col-12">
      <div className="container-fluid">
        <a className="navbar-brand">
          <span className="text-white">Atomic</span>
          <span className="text-danger">Films</span>
        </a>
        <SearchBox />
        <NavItems />
      </div>
    </nav>
  );
};

export default Navbar;
