import React from "react";

function Navigation() {
  return (
    <div className="navigation buttons nav-items">
      <div className="button nav nav-prev">
        <span className="text">Previous news</span>
        <span className="arrow prev">
          <span></span>
          <span></span>
        </span>
      </div>
      <div className="container flex-row width-auto">
        <div className="item">
          <p>1</p>
        </div>
        <div className="item">
          <p>2</p>
        </div>
        <div className="item active">
          <p>3</p>
        </div>
        <div className="item">
          <p>4</p>
        </div>
        <div className="item pass">
          <p>...</p>
        </div>
        <div className="item">
          <p>10</p>
        </div>
      </div>
      <div className="button nav nav-next">
        <span className="text">Next news</span>
        <span className="arrow next">
          <span></span>
          <span></span>
        </span>
      </div>
    </div>
  );
}

export default Navigation;
