import React from "react";

import { Navigation, Post } from "../../components";

import postExOne from "../../images/blog-image-1.png";
import postExTwo from "../../images/blog-image-2.png";

function SearchResult() {
  return (
    <div
      id="search"
      className="container page-height flex-stretch flex-center content-use"
    >
      <div className="title result">
        <h1>Search results</h1>
      </div>
      <div className="subtitle">
        <p>Nothing found</p>
      </div>
      <div id="content-flow" className="container search">
        <Post fullWidth />
        <Post twoItems />
        <Post threeItems imageSrc={postExOne} />
        <Post fullWidth />
        <Post twoItems />
        <Post threeItems imageSrc={postExTwo} />
        <Navigation />
      </div>
    </div>
  );
}

export default SearchResult;
