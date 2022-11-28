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

function AdminInterface({ localStoreStage }) {
  const [openBar, setOpenBar] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(true);

  const images = localStoreStage.images;
  const openIcon = images.icons.open;

  const handleOpenBar = (openBar) => {
    openBar ? setOpenBar(false) : setOpenBar(true);
  };

  return isAdmin === true ? (
    <div className="container page-height flex-row flex-stretch flex-space relative">
      <AdminBar openBar={openBar} localStoreStage={localStoreStage} />
      <div id="admin-content">
        <div className="open-bar" onClick={() => handleOpenBar(openBar)}>
          <img
            src={openIcon}
            alt="open-bar-icon"
            referrerPolicy="no-referrer"
          />
        </div>
        <Routes>
          <Route exact path="/" element={<Home images={images} />} />
          <Route
            exact
            path="/newpost"
            element={<AddPost images={images} />}
          />{" "}
          <Route
            exact
            path="/newnews"
            element={<AddPost type="news" images={images} />}
          />
          <Route exact path="/posts" element={<AllPosts images={images} />} />
          <Route
            exact
            path="/settings"
            element={<AccountSettings images={images} />}
          />
          <Route exact path="/*" element={<FailPage images={images} />} />
        </Routes>
      </div>
    </div>
  ) : (
    <div className="container page-height full-width flex-row flex-stretch flex-space relative animated">
      <div className="background">
        <img
          src={localStoreStage.images.animated}
          alt="special-bg"
          referrerPolicy="no-referrer"
        />
      </div>
      <Login images={images} />
    </div>
  );
}

export default AdminInterface;
