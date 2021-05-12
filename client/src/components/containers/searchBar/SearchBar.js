import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import FormSearchBar from "./styled";

const SearchBar = () => {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setValue("");
  }

  return (
    <FormSearchBar>
      <div className="searchBar" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search the entire store..."
          type="text"
        ></input>
        <div className="divLupa">
          <Link to={`/products/name/${value}`}>
            <IoSearch className="lupa" type="submit" />
          </Link>
        </div>
      </div>
    </FormSearchBar>
  );
};

export default SearchBar;
