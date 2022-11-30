import React from "react";
import Post from "./PostBlock/Post";

function Collection({ posts, images }) {
  const returnOnePost = (postOne) => {
    return (
      <Post
        category={postOne.category}
        title={postOne.title}
        data={postOne.data}
        fullWidth
        images={images}
        key={`${postOne}_special`}
      />
    );
  };

  const returnTwoPost = (postTwo, postThree) => {
    return (
      <Post
        twoItems
        images={images}
        imageSrc={postTwo.imageSrc}
        categorySecond={postTwo.category}
        titleSecond={postTwo.title}
        dataSecond={postTwo.data}
        categoryThird={postThree.category}
        titleThird={postThree.title}
        dataThird={postThree.data}
        key={`${postTwo}_2_special`}
      />
    );
  };

  const returnThreePost = (postOne, postTwo, postThree) => {
    return (
      <Post
        threeItems
        images={images}
        imageSrc={postOne.imageSrc}
        category={postOne.category}
        title={postOne.title}
        data={postOne.data}
        categorySecond={postTwo.category}
        titleSecond={postTwo.title}
        dataSecond={postTwo.data}
        categoryThird={postThree.category}
        titleThird={postThree.title}
        dataThird={postThree.data}
        key={`${postThree}_3_special`}
      />
    );
  };

  return (
    <>
      {posts
        .map((n, i, arr) => ({
          postOne: n,
          postTwo: arr[i + 1],
          postThree: arr[i + 2],
        }))
        .filter((n, i) => i % 3 === 0)
        .map((item, i) => {
          const { postOne, postTwo, postThree } = item;

          return i % 2 !== 0 ? (
            postTwo && postThree ? (
              returnThreePost(postOne, postTwo, postThree)
            ) : postTwo ? (
              returnTwoPost(postOne, postTwo)
            ) : (
              returnOnePost(postOne)
            )
          ) : i % 3 !== 0 ? (
            <React.Fragment key={`${item}_2__${i}`}>
              {postTwo && postThree
                ? returnTwoPost(postTwo, postThree)
                : postTwo
                ? returnTwoPost(postOne, postTwo)
                : returnOnePost(postOne)}
            </React.Fragment>
          ) : (
            <React.Fragment key={`${item}_3__${i}`}>
              {returnOnePost(postOne)}
              {postTwo && postThree
                ? returnTwoPost(postTwo, postThree)
                : postTwo && returnOnePost(postTwo)}
            </React.Fragment>
          );
        })}
    </>
  );
}

export default Collection;
