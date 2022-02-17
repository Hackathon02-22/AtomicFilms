import React from "react";
import { useState } from "react";

const SearchBox = ({ handleSearch }) => {
  const [value, setValue] = useState();
  return (
    <form
      class="d-flex"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button class="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
