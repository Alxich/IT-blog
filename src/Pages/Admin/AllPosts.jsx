import React from "react";
import { Post } from "../../components";

function AllPosts({ images }) {
  return (
    <>
      <div className="title main-title">
        <h1>All post that you have</h1>
      </div>
      <div id="content-flow" className="container">
        <Post fullWidth edit images={images} />
        <Post fullWidth edit images={images} />
        <Post fullWidth edit images={images} />
        <Post fullWidth edit images={images} />
      </div>
    </>
  );
}

export default AllPosts;
