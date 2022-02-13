import React, { useState } from "react";

const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          value={value}
          placeholder="Search"
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          id="search-field"
        />
        <button
          className="btn"
          onClick={handleSubmit}
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
