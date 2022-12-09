import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  AddPost,
  AllPosts,
  AccountSettings,
  Home,
  Login,
} from "../Pages/Admin/index";
import { AdminBar } from "../components";
import FailPage from "../Pages/FailPage";

import { fetchAdminPost } from "../redux/actions/post";
import { fetchAdminNews } from "../redux/actions/news";
import { fetchAdminRelated } from "../redux/actions/admin";

function AdminInterface({
  localStoreStage,
  setPosthRequest,
  setPostCatRequest,
  setNewsCatRequest,
}) {
  const dispatch = useDispatch();
  const [openBar, setOpenBar] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);

  const images = localStoreStage.images;
  const openIcon = images.icons.open;

  const handleOpenBar = (openBar) => {
    openBar ? setOpenBar(false) : setOpenBar(true);
  };

  const [homePosts, setHomePosts] = React.useState([]);
  const [homeNews, setHomeNews] = React.useState([]);
  const [editPost, setEditPost] = React.useState(-1);
  const [idsIsFetched, setIdsIsFetched] = React.useState(false);
  const loginProceed = useSelector(({ admin }) => admin.isAuthorized);
  const adminName = useSelector(({ admin }) => admin.name);
  const adminPosts = useSelector(({ admin }) => admin.relatedPost);
  const adminNews = useSelector(({ admin }) => admin.relatedNews);
  const postsData = useSelector(({ postsData }) => postsData.posts);
  const newsData = useSelector(({ newsData }) => newsData.news);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    setIsAdmin(loginProceed);

    if (loginProceed === true) {
      dispatch(fetchAdminRelated(adminName));
      setIdsIsFetched(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, loginProceed]);

  React.useEffect(() => {
    if (loginProceed === true && idsIsFetched === true) {
      dispatch(fetchAdminPost(adminPosts));
      dispatch(fetchAdminNews(adminNews));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminNews, adminPosts, dispatch]);

  React.useEffect(() => {
    postsData.length > 0 && setHomePosts(postsData.slice(0, 3));
    newsData.length > 0 && setHomeNews(newsData.slice(0, 3));
  }, [newsData, postsData]);

  return isAdmin === true ? (
    <div className="container page-height flex-row flex-stretch flex-space relative">
      <AdminBar
        openBar={openBar}
        localStoreStage={localStoreStage}
        setCurrentPage={setCurrentPage}
        adminName={adminName}
        setEditPost={setEditPost}
      />
      <div id="admin-content">
        <div className="open-bar" onClick={() => handleOpenBar(openBar)}>
          <img
            src={openIcon}
            alt="open-bar-icon"
            referrerPolicy="no-referrer"
          />
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                images={images}
                homePosts={homePosts}
                homeNews={homeNews}
                setPosthRequest={setPosthRequest}
                setPostCatRequest={setPostCatRequest}
                setNewsCatRequest={setNewsCatRequest}
                setEditPost={setEditPost}
              />
            }
          />
          <Route
            exact
            path="/newpost"
            element={
              <AddPost images={images} adminName={adminName} type={false} />
            }
          />
          <Route
            exact
            path="/newnews"
            element={
              <AddPost type={true} images={images} adminName={adminName} />
            }
          />
          <Route
            exact
            path="/editpost"
            element={
              <AddPost
                type={false}
                images={images}
                adminName={adminName}
                editPost={editPost}
              />
            }
          />
          <Route
            exact
            path="/editnews"
            element={
              <AddPost
                type={true}
                images={images}
                adminName={adminName}
                editPost={editPost}
              />
            }
          />
          <Route
            exact
            path="/posts"
            element={
              <AllPosts
                images={images}
                setPosthRequest={setPosthRequest}
                setPostCatRequest={setPostCatRequest}
                setNewsCatRequest={setNewsCatRequest}
                localStoreStage={localStoreStage}
                postsData={postsData}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setEditPost={setEditPost}
                type={false}
              />
            }
          />
          <Route
            exact
            path="/news"
            element={
              <AllPosts
                images={images}
                setPosthRequest={setPosthRequest}
                setPostCatRequest={setPostCatRequest}
                setNewsCatRequest={setNewsCatRequest}
                localStoreStage={localStoreStage}
                newsData={newsData}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setEditPost={setEditPost}
                type={true}
              />
            }
          />
          <Route
            exact
            path="/settings"
            element={<AccountSettings images={images} adminName={adminName} />}
          />
          <Route
            exact
            path="/*"
            element={
              <FailPage localStoreStage={localStoreStage} images={images} />
            }
          />
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
      <Login images={images} localStoreStage={localStoreStage} />
    </div>
  );
}

export default AdminInterface;
