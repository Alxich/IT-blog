import React from "react";

function FailPage({ images, localStoreStage }) {
  const ksenchik = images.failPage;

  const { title, button } = localStoreStage.texts.failPage;

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
      <div className="button nav nav-prev">
        <span className="text">{button}</span>
        <span className="arrow prev">
          <span></span>
          <span></span>
        </span>
      </div>
    </div>
  );
}

export default FailPage;
