import React from "react";

function SearchInput({ images, localStoreStage }) {
  const searchIcon = images.icons.search;
  const { button, input } = localStoreStage.texts.search;

  return (
    <div id="search-input">
      <form className="search">
        <input type="text" placeholder={input} />
        <button className="button search">
          <span>{button}</span>
          <img
            src={searchIcon}
            alt="search-icon"
            referrerPolicy="no-referrer"
          />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
