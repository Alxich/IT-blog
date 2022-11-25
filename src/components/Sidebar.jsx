import React from "react";

import send from "../images/icons/send-ico.svg";

function Sidebar() {
  return (
    <div id="sidebar">
      <div className="short-news">
        <div className="title">
          <h4>Featured News</h4>
        </div>
        <div className="container">
          <div className="item">
            <div className="title">
              <h5>ITAM&SAMDay is a real success!</h5>
            </div>
            <div className="date">
              <p>13 Jan 2020</p>
            </div>
          </div>
          <div className="item">
            <div className="title">
              <h5>
                Licensing Secrets. Everything you wanted to know about
                Microsoft, SAP and Oracle, but didn't know who to ask...
              </h5>
            </div>
            <div className="date">
              <p>10 Jan 2020</p>
            </div>
          </div>
          <div className="item">
            <div className="title">
              <h5>
                Management of the XXI century. Do we need to prepare for
                changes, or should we have changed a long time ago?
              </h5>
            </div>
            <div className="date">
              <p>5 Jan 2020</p>
            </div>
          </div>
        </div>
      </div>
      <div className="form subscribe">
        <div className="title">
          <h4>Newsletter subscription</h4>
        </div>
        <form>
          <input placeholder="Email@gmail.com" />
          <button className="button subscribe">
            <span>Subscribe</span>
            <img src={send} alt="arrow-send" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sidebar;
