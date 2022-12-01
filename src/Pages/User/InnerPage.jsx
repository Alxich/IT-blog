import React from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { InnerPageLoading, Sidebar } from "../../components";
import { fetchPost } from "../../redux/actions/post";
import { fetchNewOne } from "../../redux/actions/news";
import FailPage from "../FailPage";

function InnerPage({
  images,
  localStoreStage,
  postRequest,
  setPosthRequest,
  fetchType,
}) {
  // Fetch type false - post or true - news

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const banner = images.blogExample.inner[0];
  const bannerEnd = images.blogExample.inner[1];
  const addInfo = images.blogExample.inner[2];
  const { nextNews, previosNews } = localStoreStage.texts.navigation;
  const newsStoreData = useSelector(({ newsData }) => newsData.newOne[0]);
  const postStoreData = useSelector(({ postsData }) => postsData.post[0]);
  const loadedNewsTarget = useSelector(({ newsData }) => newsData.isLoaded);
  const loadedTarget = useSelector(({ postsData }) => postsData.isLoaded);

  React.useEffect(() => {
    dispatch(fetchPost(postRequest));
    dispatch(fetchNewOne(postRequest));
  }, [dispatch, postRequest]);

  React.useEffect(() => {
    if (isLoaded !== true) {
      setTimeout(() => {
        setIsLoaded(loadedTarget || loadedNewsTarget);
      }, 1500);
    }
  }, [isLoaded, loadedTarget, loadedNewsTarget]);

  return isLoaded  ? (
    postRequest > -1 ? (
      !fetchType ? (
        <>
          <div id="banner" className="inner">
            <img src={banner} alt="page-banner" referrerPolicy="no-referrer" />
          </div>
          <div className="container page-height flex-row flex-stretch flex-space content-use">
            <div id="content">
              <div className="short-info">
                <div className="category">
                  <p>{postStoreData.category}</p>
                </div>
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
                        {i % 2 !== 0 && (
                          <div className="related">
                            <div className="thumbnail">
                              <img
                                src={addInfo}
                                alt="related-bonus-info"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="title">
                              <p>
                                Taking into account the procedure can turn into
                                an interesting task, a kind of "challenge" when
                                moving to a new level.
                              </p>
                            </div>
                          </div>
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
                <div className="category">
                  <p>{newsStoreData.category}</p>
                </div>
                <div className="date">
                  <p>{newsStoreData.data}</p>
                </div>
              </div>
              <div className="title">
                <h1>{newsStoreData.title}</h1>
              </div>
              <div className="text-block">
                {newsStoreData.text
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
                        {i % 2 !== 0 && (
                          <div className="related">
                            <div className="thumbnail">
                              <img
                                src={addInfo}
                                alt="related-bonus-info"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="title">
                              <p>
                                Taking into account the procedure can turn into
                                an interesting task, a kind of "challenge" when
                                moving to a new level.
                              </p>
                            </div>
                          </div>
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
      )
    ) : (
      <FailPage localStoreStage={localStoreStage} images={images} />
    )
  ) : (
    <div className="container page-height flex-row flex-stretch flex-space content-use">
      <InnerPageLoading />
    </div>
  );
}

export default InnerPage;
