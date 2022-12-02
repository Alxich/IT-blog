import React from "react";
import Post from "./PostBlock/Post";

function Collection({
  posts,
  images,
  setPosthRequest,
  setPostCatRequest,
  setNewsCatRequest,
  type,
}) {
  const returnOnePost = (postOne) => {
    return (
      <Post
        id={postOne.id}
        category={postOne.category}
        title={postOne.title}
        data={postOne.data}
        fullWidth
        images={images}
        setPosthRequest={setPosthRequest}
        setPostCatRequest={setPostCatRequest}
        setNewsCatRequest={setNewsCatRequest}
        type={type}
        key={`${postOne}_special_${postOne.id}`}
      >
        {postOne.shortDesc}
      </Post>
    );
  };

  const returnTwoPost = (postTwo, postThree) => {
    return (
      <Post
        twoItems
        idSecond={postTwo.id}
        images={images}
        imageSrc={postTwo.imageSrc}
        categorySecond={postTwo.category}
        titleSecond={postTwo.title}
        dataSecond={postTwo.data}
        textSecond={postTwo.shortDesc}
        idThird={postThree.id}
        categoryThird={postThree.category}
        titleThird={postThree.title}
        dataThird={postThree.data}
        setPosthRequest={setPosthRequest}
        setPostCatRequest={setPostCatRequest}
        setNewsCatRequest={setNewsCatRequest}
        type={type}
        key={`${postTwo}_2_special_${postTwo.id}`}
      />
    );
  };

  const returnThreePost = (postOne, postTwo, postThree) => {
    return (
      <Post
        threeItems
        id={postOne.id}
        images={images}
        imageSrc={postOne.imageSrc}
        category={postOne.category}
        title={postOne.title}
        data={postOne.data}
        idSecond={postTwo.id}
        categorySecond={postTwo.category}
        titleSecond={postTwo.title}
        dataSecond={postTwo.data}
        idThird={postThree.id}
        categoryThird={postThree.category}
        titleThird={postThree.title}
        dataThird={postThree.data}
        setPosthRequest={setPosthRequest}
        setPostCatRequest={setPostCatRequest}
        setNewsCatRequest={setNewsCatRequest}
        type={type}
        key={`${postThree}_3_special_${postThree.id}`}
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
