import React from "react";
import classNames from "classnames";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { fetchPost, postAdminPost } from "../../redux/actions/post";
import { fetchNewOne, postAdminNews } from "../../redux/actions/news";
import { assignNewRelated } from "../../redux/actions/admin";

function AddPost({ type, images, editPost }) {
  const dispatch = useDispatch();
  const isNews = type === true;
  const send = images.icons.send;

  const sendStatus = useSelector(({ postsData }) => postsData.isLoaded);
  const post = useSelector(({ postsData }) => postsData.post);
  const news = useSelector(({ newsData }) => newsData.newOne);

  const [localData, setLocalData] = React.useState({
    id: post.length > 0 ? post[0].id : uuidv4(),
    title: "",
    category: "",
    featuredImage: "",
    bannerImage: "",
    footerImage: "",
    textAbout: "",
  });

  React.useEffect(() => {
    editPost > -1 && type !== true && dispatch(fetchPost(editPost));
    editPost > -1 && type === true && dispatch(fetchNewOne(editPost));
  }, [dispatch, editPost, type]);

  React.useEffect(() => {
    setLocalData(
      type !== true
        ? {
            id: post.length >= 0 ? post[0].id : uuidv4(),
            title: post.length >= 0 ? post[0].title : "",
            category: post.length >= 0 ? post[0].category : "",
            featuredImage: post.length >= 0 ? post[0].imageSrc : "",
            bannerImage: post.length >= 0 ? post[0].imageSrc : "",
            footerImage: post.length >= 0 ? post[0].imageSrc : "",
            textAbout: post.length >= 0 ? post[0].text : "",
          }
        : {
            id: news.length >= 0 ? news[0].id : uuidv4(),
            title: news.length >= 0 ? news[0].title : "",
            category: news.length >= 0 ? news[0].category : "",
            featuredImage: news.length >= 0 ? news[0].imageSrc : "",
            bannerImage: news.length >= 0 ? news[0].imageSrc : "",
            footerImage: news.length >= 0 ? news[0].imageSrc : "",
            textAbout: news.length >= 0 ? news[0].text : "",
          }
    );
  }, [news, post, type]);

  console.log(localData);

  const [localDataError, setLocalDataError] = React.useState({
    id: uuidv4(),
    title: false,
    category: false,
    featuredImage: false,
    bannerImage: false,
    footerImage: false,
    textAbout: false,
  });

  const [sendPostStatus, setSendPostStatus] = React.useState(false);
  const [sendStatusLocal, setSendStatusLocal] = React.useState(false);

  const valuesPassed = () => {
    if (
      localDataError.title !== true &&
      localDataError.category !== true &&
      localDataError.featuredImage !== true &&
      localDataError.bannerImage !== true &&
      localDataError.footerImage !== true &&
      localDataError.textAbout !== true
    ) {
      return true;
    } else {
      return false;
    }
  };

  const clearLocalData = () => {
    setLocalData({
      id: uuidv4(),
      title: "",
      category: "",
      featuredImage: "",
      bannerImage: "",
      footerImage: "",
      textAbout: "",
    });
  };

  React.useEffect(() => {
    const sendFunction = () => {
      type !== true
        ? dispatch(postAdminPost(localData))
        : dispatch(postAdminNews(localData));

      type !== true
        ? dispatch(assignNewRelated("post", localData.id))
        : dispatch(assignNewRelated("news", localData.id));

      setSendPostStatus(false);
    };

    sendPostStatus === true && sendFunction();
    setSendStatusLocal(sendStatus);
    sendStatus === true && clearLocalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, sendPostStatus]);

  const runSendMessageFunc = (e) => {
    e.preventDefault();

    valuesPassed() === true && setSendPostStatus(true);
  };

  const handlerChangeValue = (e) => {
    const localDataCopy = { ...localData };
    const localDataErrorCopy = { ...localDataError };
    const value = e.target.value;

    switch (e.target.name) {
      case "title":
        setLocalData({
          ...localDataCopy,
          title: value,
        });
        localDataCopy.title.length < 4 || localDataCopy.title.length <= 0
          ? setLocalDataError({
              ...localDataErrorCopy,
              title: true,
            })
          : setLocalDataError({
              ...localDataErrorCopy,
              title: false,
            });

        break;

      case "category":
        setLocalData({
          ...localDataCopy,
          category: value,
        });
        localDataCopy.category.length < 4 || localDataCopy.category.length <= 0
          ? setLocalDataError({
              ...localDataErrorCopy,
              category: true,
            })
          : setLocalDataError({
              ...localDataErrorCopy,
              category: false,
            });
        break;

      case "featuredImage":
        setLocalData({
          ...localDataCopy,
          featuredImage: value,
        });
        !validator.isURL(localDataCopy.featuredImage, {
          protocols: ["http", "https"],
          allow_query_components: false,
        })
          ? setLocalDataError({
              ...localDataErrorCopy,
              featuredImage: true,
            })
          : setLocalDataError({
              ...localDataErrorCopy,
              featuredImage: false,
            });
        break;

      case "bannerImage":
        setLocalData({
          ...localDataCopy,
          bannerImage: value,
        });

        !validator.isURL(localDataCopy.bannerImage, {
          protocols: ["http", "https"],
          allow_query_components: false,
        })
          ? setLocalDataError({
              ...localDataErrorCopy,
              bannerImage: true,
            })
          : setLocalDataError({
              ...localDataErrorCopy,
              bannerImage: false,
            });
        break;

      case "footerImage":
        setLocalData({
          ...localDataCopy,
          footerImage: value,
        });
        !validator.isURL(localDataCopy.footerImage, {
          protocols: ["http", "https"],
          allow_query_components: false,
        })
          ? setLocalDataError({
              ...localDataErrorCopy,
              footerImage: true,
            })
          : setLocalDataError({
              ...localDataErrorCopy,
              footerImage: false,
            });
        break;

      case "textAbout":
        setLocalData({
          ...localDataCopy,
          textAbout: value,
        });
        localDataCopy.textAbout.length < 4 ||
        localDataCopy.textAbout.length === 0
          ? setLocalDataError({
              ...localDataErrorCopy,
              textAbout: true,
            })
          : setLocalDataError({
              ...localDataErrorCopy,
              textAbout: false,
            });
        break;

      default:
        setLocalData(localDataCopy);
        break;
    }
  };

  return (
    <>
      <div className="title main-title">
        <h1>Tell us a {isNews ? "news" : "story"}</h1>
      </div>
      <form>
        <div className="item">
          <div className="title">
            <h3>Name the topic title</h3>
          </div>
          <input
            type="text"
            name="title"
            placeholder="What's the story ! Give it a name now"
            value={localData.title}
            onChange={(e) => handlerChangeValue(e)}
            className={classNames({ invalid: localDataError.title })}
          />
        </div>
        <div className="item">
          <div className="title">
            <h3>Choose the category</h3>
          </div>
          <input
            type="text"
            name="category"
            placeholder="What's the story ! Give it a category now"
            value={localData.category}
            onChange={(e) => handlerChangeValue(e)}
            className={classNames({ invalid: localDataError.category })}
          />
        </div>
        <div className="item">
          <div className="title">
            <h3>Add image to your story</h3>
          </div>
          <input
            type="text"
            name="featuredImage"
            placeholder="What's the story ! Give it a image now"
            value={localData.featuredImage}
            onChange={(e) => handlerChangeValue(e)}
            className={classNames({ invalid: localDataError.featuredImage })}
          />
        </div>
        <div className="item">
          <div className="title">
            <h3>Add image to your story banner</h3>
          </div>
          <input
            type="text"
            name="bannerImage"
            placeholder="What's the story ! Give it a image now"
            value={localData.bannerImage}
            onChange={(e) => handlerChangeValue(e)}
            className={classNames({ invalid: localDataError.bannerImage })}
          />
        </div>
        <div className="item">
          <div className="title">
            <h3>Add image to your story footer banner</h3>
          </div>
          <input
            type="text"
            name="footerImage"
            placeholder="What's the story ! Give it a image now"
            value={localData.footerImage}
            onChange={(e) => handlerChangeValue(e)}
            className={classNames({ invalid: localDataError.footerImage })}
          />
        </div>
        <div className="item">
          <div className="title">
            <h3>Tell us about your feeling...</h3>
          </div>
          <textarea
            name="textAbout"
            placeholder="Just keyboard and you. Magic beggins..."
            value={localData.textAbout}
            onChange={(e) => handlerChangeValue(e)}
            className={classNames({ invalid: localDataError.textAbout })}
          />
        </div>
        <button className="button send" onClick={(e) => runSendMessageFunc(e)}>
          <span>Send the story</span>
          <img src={send} alt="arrow-send" referrerPolicy="no-referrer" />
        </button>
      </form>
    </>
  );
}

export default AddPost;
