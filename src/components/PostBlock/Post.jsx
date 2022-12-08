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
  setPostCatRequest,
  setNewsCatRequest,
  type,
  setEditPost,
}) {
  const gearIcon = images.icons.gear;
  const returnMeContent = () => {
    return fullWidth ? (
      <>
        <div className="short-info">
          {type !== true ? (
            <Link
              to={type ? "/news/category" : "/category"}
              className="category"
              onClick={() => type !== true && setPostCatRequest(category)}
            >
              <p>{category && category}</p>
            </Link>
          ) : (
            <div className="category">
              <p>{category && category}</p>
            </div>
          )}
          <div className="date">
            <p>{data && data}</p>
          </div>
        </div>
        <Link to="/post" className="title">
          <h3>{title && title}</h3>
        </Link>
        <Link to="/post" className="text-block">
          {children && children}
        </Link>
        {edit && (
          <Link
            to={type ? "/admin/editnews" : "/admin/editpost"}
            className="button edit"
            onClick={() => setEditPost(id)}
          >
            <span className="text">Edit this post</span>
            {
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                src={gearIcon}
                alt="edit-image-icon"
                referrerPolicy="no-referrer"
              />
            }
          </Link>
        )}
      </>
    ) : twoItems ? (
      <>
        <div className="item big" onClick={() => setPosthRequest(idSecond)}>
          <div className="short-info">
            <Link
              to="/category"
              className="category"
              onClick={() => setPostCatRequest(categorySecond)}
            >
              <p>{categorySecond && categorySecond}</p>
            </Link>
            <div className="date">
              <p>{dataSecond && dataSecond}</p>
            </div>
          </div>
          <Link to="/post" className="title">
            <h3>{titleSecond && titleSecond}</h3>
          </Link>
          <div className="text-block">{textSecond && textSecond}</div>
        </div>
        <div className="item small" onClick={() => setPosthRequest(idThird)}>
          <Link to="/post" className="background">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="post-small"
                referrerPolicy="no-referrer"
              />
            ) : (
              ""
            )}
          </Link>
          <div className="content">
            <Link
              to="/category"
              className="category"
              onClick={() => setPostCatRequest(categoryThird)}
            >
              <p>{categoryThird && categoryThird}</p>
            </Link>
            <Link to="/post" className="title">
              <h3>{titleThird && titleThird}</h3>
            </Link>
            <div className="date">
              <p>{dataThird && dataThird}</p>
            </div>
          </div>
        </div>
      </>
    ) : (
      threeItems && (
        <>
          <div className="items-cn">
            <div className="item big" onClick={() => setPosthRequest(id)}>
              <div className="short-info">
                <Link
                  to="/category"
                  className="category"
                  onClick={() =>
                    type
                      ? setNewsCatRequest(category)
                      : setPostCatRequest(category)
                  }
                >
                  <p>{category && category}</p>
                </Link>
                <div className="date">
                  <p>{data && data}</p>
                </div>
              </div>
              <Link to="/post" className="title">
                <h3>{title && title}</h3>
              </Link>
            </div>
            <div className="item big" onClick={() => setPosthRequest(idSecond)}>
              <div className="short-info">
                <Link
                  to="/category"
                  className="category"
                  onClick={() => setPostCatRequest(categorySecond)}
                >
                  <p>{categorySecond && categorySecond}</p>
                </Link>
                <div className="date">
                  <p>{dataSecond && dataSecond}</p>
                </div>
              </div>
              <Link to="/post" className="title">
                <h3>{titleSecond && titleSecond}</h3>
              </Link>
            </div>
          </div>
          <div className="item small" onClick={() => setPosthRequest(idThird)}>
            <Link to="/post" className="background">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="post-small"
                  referrerPolicy="no-referrer"
                />
              ) : (
                ""
              )}
            </Link>
            <div className="content">
              <Link
                to="/category"
                className="category"
                onClick={() => setPostCatRequest(categoryThird)}
              >
                <p>{categoryThird && categoryThird}</p>
              </Link>
              <Link to="/post" className="title">
                <h3>{titleThird && titleThird}</h3>
              </Link>
              <div className="date">
                <p>{dataThird && dataThird}</p>
              </div>
            </div>
          </div>
        </>
      )
    );
  };

  return (
    <div
      to="/post"
      className={classNames("post", className, {
        "full-width": fullWidth,
        "two-items": twoItems,
        "three-items": threeItems,
      })}
      onClick={() => fullWidth && setPosthRequest(id)}
    >
      {returnMeContent()}
    </div>
  );
}

export default Post;
