import React from "react";

function SearchInput({ images }) {
  const searchIcon = images.icons.search;

  return (
    <div id="search-input">
      <form className="search">
        <input type="text" placeholder="Enter something..." />
        <button className="button search">
          <span>Find</span>
          <img src={searchIcon} alt="search-icon" referrerPolicy="no-referrer"/>
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
