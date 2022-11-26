import React from "react";
import { Post } from "../../components";

function Home() {
  return (
    <>
      <div className="title main-title">
        <h1>Hello, Administrator</h1>
      </div>
      <div className="title main-title">
        <h1>Recent post</h1>
      </div>
      <div id="content-flow" className="container">
        <Post fullWidth edit />
        <Post fullWidth edit />
        <Post fullWidth edit />
      </div>
      <div className="title main-title">
        <h1>Recent News</h1>
      </div>
      <div id="content-flow" className="container">
        <Post fullWidth title="News1" edit />
        <Post fullWidth title="News2" edit />
        <Post fullWidth title="News3" edit />
      </div>
    </>
  );
}

export default Home;
