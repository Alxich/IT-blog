import React from "react";
import { AddPost, AllPosts, AccountSettings } from "./index";

import adminLogo from "../../images/userlogo.png";

function Home() {
  const navigation = ["Add new post", "All posts", "User settings", "Logout"];

  return (
    <div className="container page-height flex-row flex-stretch flex-space">
      <div id="admin-bar">
        <div className="admin-info">
          <div className="user-logo">
            <img src={adminLogo} alt="admin-logo" />
            <span className="case"></span>
          </div>
          <div className="title">
            <h3>
              Hello, <br /> Administrator
            </h3>
          </div>
        </div>
        <ul className="navigation container flex-column flex-space width-auto">
          {navigation.map((item, i) => {
            return <li key={`${item}__${i}`}>{item}</li>;
          })}
        </ul>
      </div>
      <div id="admin-content">
        <AddPost />
        {/* <AllPosts /> */}
        {/* <AccountSettings /> */}
      </div>
    </div>
  );
}

export default Home;
