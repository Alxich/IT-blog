import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Collection, Sidebar, PostLoading } from "../../components";
import { fetchPosts } from "../../redux/actions/post";

function Home({ localStoreStage, images, setPosthRequest }) {
  const dispatch = useDispatch();
  const localPosts = useSelector(({ postsData }) => postsData.posts);
  const { banner } = images;

  React.useEffect(() => {
    dispatch(fetchPosts(10));
  }, [dispatch]);

  const [isLoaded, setIsLoaded] = React.useState(false);
  const loadedTarget = useSelector(({ postsData }) => postsData.isLoaded);

  React.useEffect(() => {
    if (isLoaded !== true) {
      setTimeout(() => {
        setIsLoaded(loadedTarget);
      }, 1500);
    }
  }, [isLoaded, loadedTarget]);

  return (
    <>
      <div id="banner">
        <img src={banner} alt="page-banner" referrerPolicy="no-referrer" />
      </div>
      <div className="container page-height flex-row flex-stretch flex-space content-use">
        <div id="content-flow" className="container">
          {isLoaded ? (
            <Collection posts={localPosts} setPosthRequest={setPosthRequest} images={images} />
          ) : (
            Array(8)
              .fill(0)
              .map((_, index) => <PostLoading key={index} />)
          )}
        </div>
        <Sidebar images={images} localStoreStage={localStoreStage} />
      </div>
    </>
  );
}

export default Home;
