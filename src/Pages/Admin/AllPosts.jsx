import React from "react";
import { Post } from "../../components";

function AllPosts() {
  return (
    <>
      <div className="title main-title">
        <h1>All post that you have</h1>
      </div>
      <div id="content-flow" className="container">
        <Post fullWidth edit />
        <Post fullWidth edit />
        <Post fullWidth edit />
        <Post fullWidth edit />
      </div>
    </>
  );
}

export default AllPosts;
