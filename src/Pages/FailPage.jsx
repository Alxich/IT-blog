import React from "react";
import { Link } from "react-router-dom";

function FailPage({ images, localStoreStage, changeUrl }) {
  const ksenchik = images.failPage;

  const { title, button } = localStoreStage.texts.failPage;

  React.useEffect(() => {
    changeUrl("Oops wrong page");
  }, [changeUrl]);

  return (
    <div id="failpage" className="container flex-center full-width">
      <div className="thumbnail">
        <img
          src={ksenchik}
          alt="ksenchik-face-fail"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <Link to="/" className="button nav nav-prev">
        <span className="text">{button}</span>
        <span className="arrow prev">
          <span></span>
          <span></span>
        </span>
      </Link>
    </div>
  );
}

export default FailPage;
