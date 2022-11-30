import React from "react";

import { Navigation, Post } from "../../components";

function SearchResult({ images, localStoreStage }) {
  const postExOne = images.blogExample.miniature[0];
  const postExTwo = images.blogExample.miniature[1];

  const { notFound, title } = localStoreStage.texts.search;

  return (
    <div
      id="search"
      className="container page-height flex-stretch flex-center content-use"
    >
      <div className="title result">
        <h1>{title}</h1>
      </div>
      <div className="subtitle">
        <p>{notFound}</p>
      </div>
      <div id="content-flow" className="container search">
        <Post fullWidth images={images} />
        <Post twoItems images={images} />
        <Post threeItems imageSrc={postExOne} images={images} />
        <Post fullWidth images={images} />
        <Post twoItems images={images} />
        <Post threeItems imageSrc={postExTwo} images={images} />
        <Navigation localStoreStage={localStoreStage} />
      </div>
    </div>
  );
}

export default SearchResult;
