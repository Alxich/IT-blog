import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Collection, Navigation, PostLoading, Sidebar } from "../../components";
import { fetchCatNews, fetchNews } from "../../redux/actions/news";
import { fetchCatPost } from "../../redux/actions/post";

function Category({
  localStoreStage,
  images,
  setPosthRequest,
  setPostCatRequest,
  postCatRequest,
  newsCatRequest,
  setNewsCatRequest,
  fetchCatNewsLoad,
  changeUrl,
  fetchType,
}) {
  const dispatch = useDispatch();
  const localPosts = useSelector(({ postsData }) => postsData.searchResult);
  const localNews = useSelector(({ newsData }) => newsData.searchResult);

  const loadTurnOf = () => {
    setIsLoaded(false);
  };

  React.useEffect(() => {
    loadTurnOf();
    // eslint-disable-next-line no-unused-expressions
    fetchType !== true
      ? fetchCatNewsLoad
        ? dispatch(fetchCatNews(newsCatRequest))
        : dispatch(fetchCatPost(postCatRequest))
      : dispatch(fetchNews(0));
    changeUrl(
      fetchType !== true
        ? `Category: ${postCatRequest}`
        : "IT-blog: Latest News",
      ""
    );
  }, [
    changeUrl,
    dispatch,
    fetchCatNewsLoad,
    fetchType,
    newsCatRequest,
    postCatRequest,
  ]);

  const [isLoaded, setIsLoaded] = React.useState(false);
  const loadedTarget = useSelector(({ postsData }) => postsData.isLoaded);
  const loadedNewsTarget = useSelector(({ newsData }) => newsData.isLoaded);

  // fetctype true == news or false == posts or fetchCatNewsLoad true == news or false == posts

  React.useEffect(() => {
    if (isLoaded !== true) {
      setTimeout(() => {
        setIsLoaded(
          fetchType !== true
            ? fetchCatNewsLoad !== true
              ? loadedTarget
                ? localPosts.length > 0
                  ? true
                  : false
                : false
              : loadedNewsTarget
              ? localNews.length > 0
                ? true
                : false
              : false
            : loadedTarget
            ? localPosts.length > 0
              ? true
              : false
            : false
        );
      }, 1500);
    }
  }, [
    fetchCatNewsLoad,
    fetchType,
    isLoaded,
    loadedNewsTarget,
    loadedTarget,
    localNews.length,
    localPosts.length,
  ]);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [recordsPerPage] = React.useState(2);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords =
    fetchType !== true
      ? fetchCatNewsLoad !== true
        ? localPosts.slice(indexOfFirstRecord, indexOfLastRecord)
        : localNews.slice(indexOfFirstRecord, indexOfLastRecord)
      : localNews.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(
    fetchType !== true
      ? fetchCatNewsLoad !== true
        ? localPosts.length / recordsPerPage
        : localNews.length / recordsPerPage
      : localNews.length / recordsPerPage
  );

  return (
    <>
      <div id="banner" className="text">
        <div className="title">
          <h1>
            {fetchType !== true
              ? fetchCatNewsLoad !== true
                ? localPosts.length > 0
                  ? localPosts[0].category
                  : localStoreStage.texts.categoryFail
                : localNews.length > 0
                ? localNews[0].category
                : localStoreStage.texts.categoryFail
              : localStoreStage.texts.news}
          </h1>
        </div>
      </div>
      <div className="container page-height flex-row flex-stretch flex-space content-use">
        <div id="content-flow" className="container category">
          {isLoaded ? (
            <Collection
              posts={currentRecords}
              setPosthRequest={setPosthRequest}
              setPostCatRequest={setPostCatRequest}
              setNewsCatRequest={setNewsCatRequest}
              images={images}
              type={localNews.length > 0 ? true : false}
            />
          ) : (
            Array(8)
              .fill(0)
              .map((_, index) => <PostLoading key={index} />)
          )}
          {isLoaded && nPages > 0 && (
            <Navigation
              localStoreStage={localStoreStage}
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
        <Sidebar
          localStoreStage={localStoreStage}
          images={images}
          setPosthRequest={setPosthRequest}
        />
      </div>
    </>
  );
}

export default Category;
