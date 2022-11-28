import React from "react";
import { Post } from "../../components";

function Home({ images }) {
  return (
    <>
      <div className="title main-title">
        <h1>Hello, Administrator</h1>
      </div>
      <div className="title main-title">
        <h1>Recent post</h1>
      </div>
      <div id="content-flow" className="container">
        <Post fullWidth edit images={images} />
        <Post fullWidth edit images={images} />
        <Post fullWidth edit images={images} />
      </div>
      <div className="title main-title">
        <h1>Recent News</h1>
      </div>
      <div id="content-flow" className="container">
        <Post fullWidth title="News1" edit images={images} />
        <Post fullWidth title="News2" edit images={images} />
        <Post fullWidth title="News3" edit images={images} />
      </div>
    </>
  );
}

export default Home;
