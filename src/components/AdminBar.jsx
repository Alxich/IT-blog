import classNames from "classnames";
import React from "react";

import adminLogo from "../images/userlogo.png";

function AdminBar({ openBar }) {
  const navigation = ["Add new post", "All posts", "User settings", "Logout"];

  return (
    <div id="admin-bar" className={classNames({ active: openBar })}>
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
  );
}

export default AdminBar;
