import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";

import adminLogo from "../images/userlogo.png";

function AdminBar({ openBar }) {
  const navigation = [
    { name: "Add new post", link: "newpost" },
    { name: "Add new news", link: "newnews" },
    { name: "All posts", link: "posts" },
    { name: "User settings", link: "settings" },
  ];

  return (
    <div id="admin-bar" className={classNames({ active: openBar })}>
      <div className="admin-info">
        <NavLink activeclassname="active" to="/admin" className="user-logo">
          <img src={adminLogo} alt="admin-logo" />
          <span className="case"></span>
        </NavLink>
        <div className="title">
          <h3>
            Hello, <br /> Administrator
          </h3>
        </div>
      </div>
      <ul className="navigation container flex-column flex-space width-auto">
        {navigation.map((item, i) => {
          return (
            <li key={`${item.name}__${i}`}>
              <NavLink activeclassname="active" to={item.link}>
                {item.name}
              </NavLink>
            </li>
          );
        })}
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default AdminBar;
