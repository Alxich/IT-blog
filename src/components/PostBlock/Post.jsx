import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

function Post({
  className,
  id,
  idSecond,
  idThird,
  fullWidth,
  edit,
  twoItems,
  threeItems,
  images,
  imageSrc,
  category,
  categorySecond,
  categoryThird,
  data,
  dataSecond,
  dataThird,
  title,
  titleSecond,
  titleThird,
  textSecond,
  children,
  setPosthRequest,
}) {
  const gearIcon = images.icons.gear;
  const returnMeContent = () => {
    return fullWidth ? (
      <>
        <div className="short-info">
          <div className="category">
            <p>{category && category}</p>
          </div>
          <div className="date">
            <p>{data && data}</p>
          </div>
        </div>
        <div className="title">
          <h3>{title && title}</h3>
        </div>
        <div className="text-block">{children && children}</div>
        {edit && (
          <div className="button edit">
            <span className="text">Edit this post</span>
            {
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                src={gearIcon}
                alt="edit-image-icon"
                referrerPolicy="no-referrer"
              />
            }
          </div>
        )}
      </>
    ) : twoItems ? (
      <>
        <Link
          to="/post"
          className="item big"
          onClick={() => setPosthRequest(idSecond)}
        >
          <div className="short-info">
            <div className="category">
              <p>{categorySecond && categorySecond}</p>
            </div>
            <div className="date">
              <p>{dataSecond && dataSecond}</p>
            </div>
          </div>
          <div className="title">
            <h3>{titleSecond && titleSecond}</h3>
          </div>
          <div className="text-block">{textSecond && textSecond}</div>
        </Link>
        <Link
          to="/post"
          className="item small"
          onClick={() => setPosthRequest(idThird)}
        >
          <div className="background">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="post-small"
                referrerPolicy="no-referrer"
              />
            ) : (
              ""
            )}
          </div>
          <div className="content">
            <div className="category">
              <p>{categoryThird && categoryThird}</p>
            </div>
            <div className="title">
              <h3>{titleThird && titleThird}</h3>
            </div>
            <div className="date">
              <p>{dataThird && dataThird}</p>
            </div>
          </div>
        </Link>
      </>
    ) : (
      threeItems && (
        <>
          <div className="items-cn">
            <Link
              to="/post"
              className="item big"
              onClick={() => setPosthRequest(id)}
            >
              <div className="short-info">
                <div className="category">
                  <p>{category && category}</p>
                </div>
                <div className="date">
                  <p>{data && data}</p>
                </div>
              </div>
              <div className="title">
                <h3>{title && title}</h3>
              </div>
            </Link>
            <Link
              to="/post"
              className="item big"
              onClick={() => setPosthRequest(idSecond)}
            >
              <div className="short-info">
                <div className="category">
                  <p>{categorySecond && categorySecond}</p>
                </div>
                <div className="date">
                  <p>{dataSecond && dataSecond}</p>
                </div>
              </div>
              <div className="title">
                <h3>{titleSecond && titleSecond}</h3>
              </div>
            </Link>
          </div>
          <Link
            to="/post"
            className="item small"
            onClick={() => setPosthRequest(idThird)}
          >
            <div className="background">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="post-small"
                  referrerPolicy="no-referrer"
                />
              ) : (
                ""
              )}
            </div>
            <div className="content">
              <div className="category">
                <p>{categoryThird && categoryThird}</p>
              </div>
              <div className="title">
                <h3>{titleThird && titleThird}</h3>
              </div>
              <div className="date">
                <p>{dataThird && dataThird}</p>
              </div>
            </div>
          </Link>
        </>
      )
    );
  };

  return fullWidth ? (
    <Link
      to="/post"
      className={classNames("post", className, {
        "full-width": fullWidth,
        "two-items": twoItems,
        "three-items": threeItems,
      })}
      onClick={() => fullWidth && setPosthRequest(id)}
    >
      {returnMeContent()}
    </Link>
  ) : (
    <div
      className={classNames("post", className, {
        "full-width": fullWidth,
        "two-items": twoItems,
        "three-items": threeItems,
      })}
    >
      {returnMeContent()}
    </div>
  );
}

export default Post;
