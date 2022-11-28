import React from "react";

import { Post, Sidebar } from "../../components";

function Home({ localStoreStage, images }) {
  const { banner } = images;

  return (
    <>
      <div id="banner">
        <img src={banner} alt="page-banner" referrerPolicy="no-referrer" />
      </div>
      <div className="container page-height flex-row flex-stretch flex-space content-use">
        <div id="content-flow" className="container">
          <Post fullWidth images={images} />
          <Post twoItems images={images} />
          <Post threeItems images={images} />
          <Post fullWidth images={images} />
          <Post twoItems images={images} />
          <Post threeItems images={images} />
        </div>
        <Sidebar images={images} />
      </div>
    </>
  );
}

export default Home;
