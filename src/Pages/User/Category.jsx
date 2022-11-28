import React from "react";

import { Navigation, Post, Sidebar } from "../../components";

function Category() {
  return (
    <>
      <div id="banner" className="text">
        <div className="title">
          <h1>Category name</h1>
        </div>
      </div>
      <div className="container page-height flex-row flex-stretch flex-space content-use">
        <div id="content-flow" className="container category">
          <Post fullWidth />
          <Post twoItems />
          <Post threeItems />
          <Post fullWidth />
          <Post twoItems />
          <Post threeItems />
          <Navigation />
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default Category;
