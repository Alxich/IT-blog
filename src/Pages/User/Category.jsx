import React from "react";

import { Navigation, Post, Sidebar } from "../../components";

function Category({ localStoreStage, images }) {
  return (
    <>
      <div id="banner" className="text">
        <div className="title">
          <h1>Category name</h1>
        </div>
      </div>
      <div className="container page-height flex-row flex-stretch flex-space content-use">
        <div id="content-flow" className="container category">
          <Post fullWidth images={images} />
          <Post twoItems images={images} />
          <Post threeItems images={images} />
          <Post fullWidth images={images} />
          <Post twoItems images={images} />
          <Post threeItems images={images} />
          <Navigation localStoreStage={localStoreStage} images={images} />
        </div>
        <Sidebar localStoreStage={localStoreStage} images={images} />
      </div>
    </>
  );
}

export default Category;
