import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  AddPost,
  AllPosts,
  AccountSettings,
  Home,
  Login,
} from "../Pages/Admin/index";
import { AdminBar } from "../components";
import FailPage from "../Pages/FailPage";

import openIcon from "../images/icons/open.svg";

function AdminInterface() {
  const [openBar, setOpenBar] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);

  const handleOpenBar = (openBar) => {
    openBar ? setOpenBar(false) : setOpenBar(true);
  };

  return isAdmin === true ? (
    <div className="container page-height flex-row flex-stretch flex-space relative">
      <AdminBar openBar={openBar} />
      <div id="admin-content">
        <div className="open-bar" onClick={() => handleOpenBar(openBar)}>
          <img src={openIcon} alt="open-bar-icon" />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/newpost" element={<AddPost />} />{" "}
          <Route exact path="/newnews" element={<AddPost type="news" />} />
          <Route exact path="/posts" element={<AllPosts />} />
          <Route exact path="/settings" element={<AccountSettings />} />
          <Route exact path="/*" element={<FailPage />} />
        </Routes>
      </div>
    </div>
  ) : (
    <div className="container page-height full-width flex-row flex-stretch flex-space relative animated">
      <Login />
    </div>
  );
}

export default AdminInterface;
