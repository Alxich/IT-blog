import React from "react";

import searchIcon from "../images/icons/search-ico.svg";

function SearchInput() {
  return (
    <div id="search-input">
      <form className="search">
        <input type="text" placeholder="Enter something..." />
        <button className="button search">
          <span>Find</span>
          <img src={searchIcon} alt="search-icon" />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
