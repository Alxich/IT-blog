import React from "react";
import { Post } from "../../components";

function Home({
  images,
  homeNews,
  homePosts,
  setPosthRequest,
  setPostCatRequest,
  setNewsCatRequest,
}) {
  return (
    <>
      <div className="title main-title">
        <h1>Hello, Administrator</h1>
      </div>
      <div className="title main-title">
        <h1>Recent post</h1>
      </div>
      <div id="content-flow" className="container">
        {homePosts.map((item, i) => {
          return (
            <Post
              edit
              id={item.id}
              category={item.category}
              title={item.title}
              data={item.data}
              fullWidth
              images={images}
              setPosthRequest={setPosthRequest}
              setPostCatRequest={setPostCatRequest}
              setNewsCatRequest={setNewsCatRequest}
              type={false}
              key={`${item}__${i}`}
            />
          );
        })}
      </div>
      <div className="title main-title">
        <h1>Recent News</h1>
      </div>
      <div id="content-flow" className="container">
        {homeNews.map((item, i) => {
          return (
            <Post
              edit
              id={item.id}
              category={item.category}
              title={item.title}
              data={item.data}
              fullWidth
              images={images}
              setPosthRequest={setPosthRequest}
              setPostCatRequest={setPostCatRequest}
              setNewsCatRequest={setNewsCatRequest}
              type={true}
              key={`${item}__${i}`}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
