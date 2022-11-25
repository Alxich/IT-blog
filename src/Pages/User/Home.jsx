import React from "react";

import banner from "../../images/banner-image.png";
import postExOne from "../../images/blog-image-1.png";
import postExTwo from "../../images/blog-image-2.png";

import { Post, Sidebar } from "../../components";

function Home() {
  return (
    <>
      <div id="banner">
        <img src={banner} alt="page-banner" />
      </div>
      <div className="container page-height flex-row flex-stretch flex-space content-use">
        <div id="content-flow" className="container">
          <Post fullWidth />
          <Post twoItems />
          <Post threeItems imageSrc={postExOne} />
          <Post fullWidth />
          <Post twoItems />
          <Post threeItems imageSrc={postExTwo} />
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
