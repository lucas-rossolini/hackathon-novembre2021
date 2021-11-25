import React from "react";

function SearchBar({ filtervalue, onChangefilter }) {
  return (
    <div>
      <div className="flexbox">
        <div className="search text-center">
          <div>
            <input
              type="search"
              value={filtervalue}
              onChange={onChangefilter}
              className="inputfilter"
              placeholder="Filter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
