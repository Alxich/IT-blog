import React from "react";
import openIcon from "../images/icons/open.svg";

import { AddPost, AllPosts, AccountSettings, Home } from "../Pages/Admin/index";

import { AdminBar } from "../components";

import FailPage from "../Pages/FailPage";

function AdminInterface() {
  const [openBar, setOpenBar] = React.useState(false);

  const handleOpenBar = (openBar) => {
    openBar ? setOpenBar(false) : setOpenBar(true);
  };

  return (
    <div className="container page-height flex-row flex-stretch flex-space relative">
      <AdminBar openBar={openBar} />
      <div id="admin-content">
        <div className="open-bar" onClick={() => handleOpenBar(openBar)}>
          <img src={openIcon} alt="open-bar-icon" />
        </div>
        <AddPost />
        {/* <AllPosts /> */}
        {/* <AccountSettings /> */}
      </div>
    </div>
  );
}

export default AdminInterface;
