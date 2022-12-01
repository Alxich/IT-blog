import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Navigation, Collection, PostLoading } from "../../components";
import { searchPost } from "../../redux/actions/post";

function SearchResult({
  images,
  localStoreStage,
  searchRequest,
  setPosthRequest,
}) {
  const dispatch = useDispatch();
  const localPosts = useSelector(({ postsData }) => postsData.posts);

  const loadTurnOf = () => {
    setIsLoaded(false);
  };

  React.useEffect(() => {
    loadTurnOf();
    dispatch(searchPost(searchRequest));
  }, [dispatch, searchRequest]);

  const [isLoaded, setIsLoaded] = React.useState(false);
  const loadedTarget = useSelector(({ postsData }) => postsData.isLoaded);

  React.useEffect(() => {
    if (isLoaded !== true) {
      setTimeout(() => {
        setIsLoaded(loadedTarget);
      }, 1500);
    }
  }, [isLoaded, loadedTarget]);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [recordsPerPage] = React.useState(2);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = localPosts.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(localPosts.length / recordsPerPage);

  const { notFound, title } = localStoreStage.texts.search;

  return (
    <div id="search" className="container page-height flex-stretch content-use">
      <div className="title result">
        <h1>{title}</h1>
      </div>
      {localPosts.length <= 0 && (
        <div className="subtitle">
          <p>{notFound}</p>
        </div>
      )}
      <div id="content-flow" className="container search">
        {isLoaded ? (
          <Collection
            posts={currentRecords}
            setPosthRequest={setPosthRequest}
            images={images}
          />
        ) : (
          Array(8)
            .fill(0)
            .map((_, index) => <PostLoading key={index} />)
        )}
        {localPosts.length > 0 && (
          <Navigation
            localStoreStage={localStoreStage}
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}

export default SearchResult;
