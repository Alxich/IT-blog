import React from "react";

import postExOne from "../../images/blog-image-1.png";
import postExTwo from "../../images/blog-image-2.png";

function SearchResult() {
  return (
    <div
      id="search"
      className="container page-height flex-stretch flex-center content-use"
    >
      <div className="title result">
        <h1>Search results</h1>
      </div>
      <div className="subtitle">
        <p>Nothing found</p>
      </div>
      <div id="content-flow" className="container search">
        <div className="post full-width">
          <div className="short-info">
            <div className="category">
              <p>IT-assets</p>
            </div>
            <div className="date">
              <p>13 Jan 2020</p>
            </div>
          </div>
          <div className="title">
            <h3>Is IT asset management a boring routine or a creative task?</h3>
          </div>
          <div className="text-block">
            <p>
              Thinking about the management of IT assets, I remembered one
              educational example. The manager of IT capabilities in a large
              company periodically prepared a thick report for management. Once
              again, he did not bring the report, he decided to check whether it
              was needed at all.
            </p>
          </div>
        </div>
        <div className="post two-items">
          <div className="item big">
            <div className="short-info">
              <div className="category">
                <p>IT-assets</p>
              </div>
              <div className="date">
                <p>13 Jan 2020</p>
              </div>
            </div>
            <div className="title">
              <h3>
                Is IT asset management a boring routine or a creative task?
              </h3>
            </div>
            <div className="text-block">
              <p>
                Thinking about the management of IT assets, I remembered one
                educational example. The manager of IT capabilities in a large
                company periodically prepared a thick report for management.
                Once again, he did not bring the report, he decided to check
                whether it was needed at all.
              </p>
            </div>
          </div>
          <div className="item small">
            <div className="background"></div>
            <div className="content">
              <div className="category">
                <p>Sandbox</p>
              </div>
              <div className="title">
                <h3>ITAM&SAMDay is a real success!</h3>
              </div>
              <div className="date">
                <p>13 Jan 2020</p>
              </div>
            </div>
          </div>
        </div>
        <div className="post three-items">
          <div className="items-cn">
            <div className="item big">
              <div className="short-info">
                <div className="category">
                  <p>IT-assets</p>
                </div>
                <div className="date">
                  <p>13 Jan 2020</p>
                </div>
              </div>
              <div className="title">
                <h3>
                  Is IT asset management a boring routine or a creative task?
                </h3>
              </div>
            </div>
            <div className="item big">
              <div className="short-info">
                <div className="category">
                  <p>IT-assets</p>
                </div>
                <div className="date">
                  <p>13 Jan 2020</p>
                </div>
              </div>
              <div className="title">
                <h3>
                  Is IT asset management a boring routine or a creative task?
                </h3>
              </div>
            </div>
          </div>
          <div className="item small">
            <div className="background">
              <img src={postExOne} alt="post-small" />
            </div>
            <div className="content">
              <div className="category">
                <p>Sandbox</p>
              </div>
              <div className="title">
                <h3>ITAM&SAMDay is a real success!</h3>
              </div>
              <div className="date">
                <p>13 Jan 2020</p>
              </div>
            </div>
          </div>
        </div>
        <div className="post two-items">
          <div className="item big">
            <div className="short-info">
              <div className="category">
                <p>IT-assets</p>
              </div>
              <div className="date">
                <p>13 Jan 2020</p>
              </div>
            </div>
            <div className="title">
              <h3>
                Is IT asset management a boring routine or a creative task?
              </h3>
            </div>
            <div className="text-block">
              <p>
                Thinking about the management of IT assets, I remembered one
                educational example. The manager of IT capabilities in a large
                company periodically prepared a thick report for management.
                Once again, he did not bring the report, he decided to check
                whether it was needed at all.
              </p>
            </div>
          </div>
          <div className="item small">
            <div className="background"></div>
            <div className="content">
              <div className="category">
                <p>Sandbox</p>
              </div>
              <div className="title">
                <h3>ITAM&SAMDay is a real success!</h3>
              </div>
              <div className="date">
                <p>13 Jan 2020</p>
              </div>
            </div>
          </div>
        </div>
        <div className="post three-items">
          <div className="items-cn">
            <div className="item big">
              <div className="short-info">
                <div className="category">
                  <p>IT-assets</p>
                </div>
                <div className="date">
                  <p>13 Jan 2020</p>
                </div>
              </div>
              <div className="title">
                <h3>
                  Is IT asset management a boring routine or a creative task?
                </h3>
              </div>
            </div>
            <div className="item big">
              <div className="short-info">
                <div className="category">
                  <p>IT-assets</p>
                </div>
                <div className="date">
                  <p>13 Jan 2020</p>
                </div>
              </div>
              <div className="title">
                <h3>
                  Is IT asset management a boring routine or a creative task?
                </h3>
              </div>
            </div>
          </div>
          <div className="item small">
            <div className="background">
              <img src={postExTwo} alt="post-small" />
            </div>
            <div className="content">
              <div className="category">
                <p>Sandbox</p>
              </div>
              <div className="title">
                <h3>ITAM&SAMDay is a real success!</h3>
              </div>
              <div className="date">
                <p>13 Jan 2020</p>
              </div>
            </div>
          </div>
        </div>
        <div className="navigation buttons nav-items">
          <div className="button nav nav-prev">
            <span className="text">Previous news</span>
            <span className="arrow prev">
              <span></span>
              <span></span>
            </span>
          </div>
          <div className="container flex-row width-auto">
            <div className="item">
              <p>1</p>
            </div>
            <div className="item">
              <p>2</p>
            </div>
            <div className="item active">
              <p>3</p>
            </div>
            <div className="item">
              <p>4</p>
            </div>
            <div className="item pass">
              <p>...</p>
            </div>
            <div className="item">
              <p>10</p>
            </div>
          </div>
          <div className="button nav nav-next">
            <span className="text">Next news</span>
            <span className="arrow next">
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
