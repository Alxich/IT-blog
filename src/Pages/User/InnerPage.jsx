import React from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { InnerPageLoading, Sidebar } from "../../components";
import { fetchPost, fetchRelatedPost } from "../../redux/actions/post";
import { fetchNewOne, fetchRelatedNews } from "../../redux/actions/news";
import FailPage from "../FailPage";
import { Link } from "react-router-dom";

function InnerPage({
  images,
  localStoreStage,
  postRequest,
  setPosthRequest,
  setPostCatRequest,
  setNewsCatRequest,
  fetchType,
  changeUrl,
}) {
  // Fetch type false - post or true - news
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const banner = images.blogExample.inner[0];
  const bannerEnd = images.blogExample.inner[1];
  const { nextNews, previosNews } = localStoreStage.texts.navigation;

  const newsStoreData = useSelector(({ newsData }) => newsData.newOne[0]);
  const newsRealtedData = useSelector(({ newsData }) => newsData.related[0]);

  const postStoreData = useSelector(({ postsData }) => postsData.post[0]);
  const postRealtedData = useSelector(({ postsData }) => postsData.related[0]);

  const loadedNewsTarget = useSelector(({ newsData }) => newsData.isLoaded);
  const loadedTarget = useSelector(({ postsData }) => postsData.isLoaded);

  React.useEffect(() => {
    setIsLoaded(false);
    dispatch(fetchPost(postRequest));
    dispatch(fetchNewOne(postRequest));
    dispatch(fetchRelatedPost(postRequest));
  }, [dispatch, postRequest]);

  React.useEffect(() => {
    changeUrl(
      !fetchType
        ? postStoreData
          ? postStoreData.title
          : newsStoreData && newsStoreData.title
        : newsStoreData && newsStoreData.title,
      !fetchType
        ? postStoreData
          ? postStoreData.title
          : newsStoreData && newsStoreData.title
        : newsStoreData && newsStoreData.title
    );
    postStoreData || (newsStoreData && setIsLoaded(false));
    postStoreData &&
      dispatch(fetchRelatedPost(postStoreData.category, postStoreData.id));
    newsStoreData &&
      dispatch(fetchRelatedNews(newsStoreData.category, newsStoreData.id));
  }, [dispatch, postStoreData, newsStoreData, changeUrl, fetchType]);

  React.useEffect(() => {
    if (isLoaded !== true) {
      setTimeout(() => {
        setIsLoaded(loadedTarget || loadedNewsTarget);
      }, 1500);
    }
  }, [isLoaded, loadedTarget, loadedNewsTarget]);

  return isLoaded ? (
    postRequest > -1 ? (
      !fetchType ? (
        <>
          <div id="banner" className="inner">
            <img src={banner} alt="page-banner" referrerPolicy="no-referrer" />
          </div>
          <div className="container page-height flex-row flex-stretch flex-space content-use">
            <div id="content">
              <div className="short-info">
                <Link
                  to="/category"
                  className="category"
                  onClick={() => {
                    setPostCatRequest(postStoreData.category);
                  }}
                >
                  <p>{postStoreData.category}</p>
                </Link>
                <div className="date">
                  <p>{postStoreData.data}</p>
                </div>
              </div>
              <div className="title">
                <h1>{postStoreData.title}</h1>
              </div>
              <div className="text-block">
                {postStoreData.text
                  .map((n, i, arr) => ({ textOne: n, textTwo: arr[i + 1] }))
                  .filter((_n, i) => i % 2 === 0)
                  .map((item, i) => {
                    return (
                      <div
                        className={classnames("text", {
                          more: i % 3 !== 0,
                        })}
                        key={`${item}__${i}`}
                      >
                        {i % 2 !== 0 && postRealtedData && (
                          <Link
                            to="/post"
                            onClick={() => setPosthRequest(postRealtedData.id)}
                            className="related"
                          >
                            <div className="thumbnail">
                              <img
                                src={postRealtedData.imageSrc}
                                alt="related-bonus-info"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="title">
                              <p>{postRealtedData.title}</p>
                            </div>
                          </Link>
                        )}
                        <p>{item.textOne}</p>
                        <p>{item.textTwo}</p>
                      </div>
                    );
                  })}
              </div>
              <div className="banner-content">
                <img
                  src={bannerEnd}
                  alt="content-banner"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="navigation buttons">
                <div className="button nav nav-prev">
                  <span className="text">{previosNews}</span>
                  <span className="arrow prev">
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div className="button nav nav-next">
                  <span className="text">{nextNews}</span>
                  <span className="arrow next">
                    <span></span>
                    <span></span>
                  </span>
                </div>
              </div>
            </div>
            <Sidebar
              images={images}
              localStoreStage={localStoreStage}
              setPosthRequest={setPosthRequest}
            />
          </div>
        </>
      ) : (
        <>
          <div id="banner" className="inner">
            <img src={banner} alt="page-banner" referrerPolicy="no-referrer" />
          </div>
          <div className="container page-height flex-row flex-stretch flex-space content-use">
            <div id="content">
              <div className="short-info">
                <Link
                  to="/news/category"
                  className="category"
                  onClick={() =>
                    setNewsCatRequest(newsStoreData && newsStoreData.category)
                  }
                >
                  <p>{newsStoreData && newsStoreData.category}</p>
                </Link>
                <div className="date">
                  <p>{newsStoreData && newsStoreData.data}</p>
                </div>
              </div>
              <div className="title">
                <h1>{newsStoreData && newsStoreData.title}</h1>
              </div>
              <div className="text-block">
                {newsStoreData &&
                  newsStoreData.text
                    .map((n, i, arr) => ({ textOne: n, textTwo: arr[i + 1] }))
                    .filter((_n, i) => i % 2 === 0)
                    .map((item, i) => {
                      return (
                        <div
                          className={classnames("text", {
                            more: i % 3 !== 0,
                          })}
                          key={`${item}__${i}`}
                        >
                          <p>{item.textOne}</p>
                          <p>{item.textTwo}</p>
                        </div>
                      );
                    })}
              </div>
              <div className="banner-content">
                <img
                  src={bannerEnd}
                  alt="content-banner"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="navigation buttons">
                <div className="button nav nav-prev">
                  <span className="text">{previosNews}</span>
                  <span className="arrow prev">
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div className="button nav nav-next">
                  <span className="text">{nextNews}</span>
                  <span className="arrow next">
                    <span></span>
                    <span></span>
                  </span>
                </div>
              </div>
            </div>
            <Sidebar
              images={images}
              localStoreStage={localStoreStage}
              setPosthRequest={setPosthRequest}
            />
          </div>
        </>
      )
    ) : (
      <FailPage
        localStoreStage={localStoreStage}
        images={images}
        changeUrl={changeUrl}
      />
    )
  ) : (
    <div className="container page-height flex-row flex-stretch flex-space content-use">
      <InnerPageLoading />
    </div>
  );
}

export default InnerPage;
