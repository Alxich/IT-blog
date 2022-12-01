import classNames from "classnames";
import React from "react";

function Navigation({ localStoreStage, nPages, currentPage, setCurrentPage }) {
  const { nextNews, previosNews } = localStoreStage.texts.navigation;

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="navigation buttons nav-items">
      <div className="button nav nav-prev" onClick={prevPage}>
        <span className="text">{previosNews}</span>
        <span className="arrow prev">
          <span></span>
          <span></span>
        </span>
      </div>
      <div className="container flex-row width-auto">
        {pageNumbers.map((pgNumber, i) => (
          <div
            key={`${pgNumber}__${i}`}
            className={classNames("item", {
              active: currentPage === pgNumber,
            })}
            onClick={() => setCurrentPage(pgNumber)}
          >
            <p> {pgNumber}</p>
          </div>
        ))}
      </div>
      <div className="button nav nav-next" onClick={nextPage}>
        <span className="text">{nextNews}</span>
        <span className="arrow next">
          <span></span>
          <span></span>
        </span>
      </div>
    </div>
  );
}

export default Navigation;
