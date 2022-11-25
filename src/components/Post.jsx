import classNames from "classnames";
import React from "react";

import gearIcon from "../images/icons/gear.svg";

function Post({
  className,
  fullWidth,
  edit,
  twoItems,
  threeItems,
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
  children,
}) {
  return (
    <div
      className={classNames("post", className, {
        "full-width": fullWidth,
        "two-items": twoItems,
        "three-items": threeItems,
      })}
    >
      {fullWidth ? (
        <>
          <div className="short-info">
            <div className="category">
              <p>{category ? category : "IT-assets"}</p>
            </div>
            <div className="date">
              <p>{data ? data : "13 Jan 2020"}</p>
            </div>
          </div>
          <div className="title">
            <h3>
              {title
                ? title
                : "Is IT asset management a boring routine or a creative task?"}
            </h3>
          </div>
          <div className="text-block">
            {children
              ? children
              : [
                  <p>
                    Thinking about the management of IT assets, I remembered one
                    educational example. The manager of IT capabilities in a
                    large company periodically prepared a thick report for
                    management. Once again, he did not bring the report, he
                    decided to check whether it was needed at all.
                  </p>,
                ]}
          </div>
          {edit && (
            <div className="button edit">
              <span className="text">Edit this post</span>
              <img src={gearIcon} alt="edit-image-icon" />
            </div>
          )}
        </>
      ) : twoItems ? (
        <>
          <div className="item big">
            <div className="short-info">
              <div className="category">
                <p>{category ? category : "IT-assets"}</p>
              </div>
              <div className="date">
                <p>{data ? data : "13 Jan 2020"}</p>
              </div>
            </div>
            <div className="title">
              <h3>
                {title
                  ? title
                  : "Is IT asset management a boring routine or a creative task?"}{" "}
              </h3>
            </div>
            <div className="text-block">
              {children
                ? children
                : [
                    <p>
                      Thinking about the management of IT assets, I remembered
                      one educational example. The manager of IT capabilities in
                      a large company periodically prepared a thick report for
                      management. Once again, he did not bring the report, he
                      decided to check whether it was needed at all.
                    </p>,
                  ]}
            </div>
          </div>
          <div className="item small">
            <div className="background"></div>
            <div className="content">
              <div className="category">
                <p>{categorySecond ? categorySecond : "Sandbox"}</p>
              </div>
              <div className="title">
                <h3>
                  {titleSecond ? titleSecond : "ITAM&SAMDay is a real success!"}
                </h3>
              </div>
              <div className="date">
                <p>{dataSecond ? dataSecond : "13 Jan 2020"}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        threeItems && (
          <>
            <div className="items-cn">
              <div className="item big">
                <div className="short-info">
                  <div className="category">
                    <p>{category ? category : "IT-assets"}</p>
                  </div>
                  <div className="date">
                    <p>{data ? data : "13 Jan 2020"}</p>
                  </div>
                </div>
                <div className="title">
                  <h3>
                    {title
                      ? title
                      : "Is IT asset management a boring routine or a creative task?"}
                  </h3>
                </div>
              </div>
              <div className="item big">
                <div className="short-info">
                  <div className="category">
                    <p>{categorySecond ? categorySecond : "IT-assets"}</p>
                  </div>
                  <div className="date">
                    <p>{dataSecond ? dataSecond : "13 Jan 2020"}</p>
                  </div>
                </div>
                <div className="title">
                  <h3>
                    {titleSecond
                      ? titleSecond
                      : "Is IT asset management a boring routine or a creative task?"}
                  </h3>
                </div>
              </div>
            </div>
            <div className="item small">
              <div className="background">
                {imageSrc ? <img src={imageSrc} alt="post-small" /> : ""}
              </div>
              <div className="content">
                <div className="category">
                  <p>{categoryThird ? categoryThird : "Sandbox"}</p>
                </div>
                <div className="title">
                  <h3>
                    {" "}
                    {titleThird ? titleThird : "ITAM&SAMDay is a real success!"}
                  </h3>
                </div>
                <div className="date">
                  <p>{dataThird ? dataThird : "13 Jan 2020"}</p>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}

export default Post;
