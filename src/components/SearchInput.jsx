import React from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

function SearchInput({
  images,
  localStoreStage,
  setSearchOpen,
  searchOpen,
  setSearchRequest,
}) {
  const navigate = useNavigate();
  const searchIcon = images.icons.search;
  const { button, input } = localStoreStage.texts.search;
  const [inputValue, setInputValue] = React.useState("");

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/searchresult");
    setSearchOpen(false);
    setSearchRequest(inputValue);
  };

  const valueChangeHandler = (e) => {
    setInputValue(e.target.value);

    if (e.key === "Enter") {
      handleNavigate(e);
    }
  };

  return (
    <div id="search-input" className={classNames({ active: searchOpen })}>
      <form className="search" onSubmit={(e) => handleNavigate(e)}>
        <input
          type="text"
          placeholder={input}
          value={inputValue}
          onChange={(e) => valueChangeHandler(e)}
        />
        <button className="button search" onClick={(e) => handleNavigate(e)}>
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
