import React from "react";

import ksenchik from "../images/ksenchik.png";

function FailPage() {
  return (
    <div id="failpage" className="container flex-center full-width">
      <div className="thumbnail">
        <img src={ksenchik} alt="ksenchik-face-fail" />
      </div>
      <div className="title">
        <h1>Something went wrong...</h1>
      </div>
      <div className="button nav nav-prev">
        <span className="text">Return back</span>
        <span className="arrow prev">
          <span></span>
          <span></span>
        </span>
      </div>
    </div>
  );
}

export default FailPage;
