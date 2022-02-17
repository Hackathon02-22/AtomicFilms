import React from "react";
import { useState } from "react";

const SearchBox = ({ handleSearch }) => {
  const [value, setValue] = useState();
  return (
    <form
    className="d-flex"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
