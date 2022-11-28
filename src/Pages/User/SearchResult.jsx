import React from "react";

import { Navigation, Post } from "../../components";

function SearchResult({ images }) {
  const postExOne = images.blogExample.miniature[0];
  const postExTwo = images.blogExample.miniature[1];

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
