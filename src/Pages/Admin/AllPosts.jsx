import React from "react";
import { Navigation, Post } from "../../components";

function AllPosts({
  images,
  postsData,
  newsData,
  setPosthRequest,
  setPostCatRequest,
  setNewsCatRequest,
  localStoreStage,
  type,
}) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [recordsPerPage] = React.useState(3);

  const localpost = type !== true ? postsData : newsData;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = localpost.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(localpost.length / recordsPerPage);

  return (
    <>
      <div className="title main-title">
        <h1>All post that you have</h1>
      </div>
      <div id="content-flow" className="container">
        {currentRecords.map((item, i) => {
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
              type={type}
              key={`${item}__${i}`}
            />
          );
        })}
        {localpost.length > 0 && (
          <Navigation
            localStoreStage={localStoreStage}
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
}

export default AllPosts;
