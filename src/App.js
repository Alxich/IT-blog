import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Footer, Header, LoadingPage, SearchInput } from "./components";
import UserInterface from "./interfaces/User";
import AdminInterface from "./interfaces/Admin";
import { fetchData } from "./redux/actions/app";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const loadedTarget = useSelector(({ appData }) => appData.isLoaded);

  React.useEffect(() => {
    if (isLoaded !== true) {
      setTimeout(() => {
        setIsLoaded(loadedTarget);
      }, 1500);
    }
  }, [isLoaded, loadedTarget]);

  const localStoreStage = useSelector(({ appData }) => appData.defaultData);
  const [menuOpen, setMenuOpen] = React.useState();
  const [searchOpen, setSearchOpen] = React.useState();
  const [searchRequest, setSearchRequest] = React.useState();
  const [postRequest, setPosthRequest] = React.useState();
  const [postCatRequest, setPostCatRequest] = React.useState("");
  const [newsCatRequest, setNewsCatRequest] = React.useState("");

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  /**
   * Adds a query string parameter in the provided url.
   * Update parameter if it already exists.
   * Does nothing if value is null or undefined.
   *
   * @param {string} url to modify.
   * @param {string} key of query parameter.
   * @param {string} value of query parameter.
   *
   * @returns {string} modified url.
   */

  function addQueryStringParameter(url, key, value) {
    if (value === null || value === undefined) {
      return url;
    }

    value = encodeURIComponent(value);

    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i"),
      separator = url.indexOf("?") !== -1 ? "&" : "?";
    if (url.match(re)) {
      return url.replace(re, "$1" + key + "=" + value + "$2");
    } else {
      return url + separator + key + "=" + value;
    }
  }

  function changeUrl(pageTitle, urlTitle) {
    const title = pageTitle;
    let pageUrl = addQueryStringParameter(document.URL, "", urlTitle);

    document.title = title;
    window.history.pushState(
      null,
      { pageTitle: title ? title : "IT-blog" },
      urlTitle ? pageUrl : ""
    );
  }

  return (
    <div className="App">
      {isLoaded ? (
        <>
          <Header
            setMenuOpen={setMenuOpen}
            menuOpen={menuOpen}
            searchOpen={searchOpen}
            setSearchOpen={setSearchOpen}
            localStoreStage={localStoreStage}
          />
          <SearchInput
            searchOpen={searchOpen}
            setSearchOpen={setSearchOpen}
            localStoreStage={localStoreStage}
            images={localStoreStage.images}
            setSearchRequest={setSearchRequest}
            changeUrl={changeUrl}
          />
          <main className="wrapper">
            <Routes>
              <Route
                exact
                path="/admin/*"
                element={
                  <AdminInterface
                    localStoreStage={localStoreStage}
                    setPosthRequest={setPosthRequest}
                    setPostCatRequest={setPostCatRequest}
                    setNewsCatRequest={setNewsCatRequest}
                    changeUrl={changeUrl}
                  />
                }
              ></Route>
              <Route
                exact
                path="/*"
                element={
                  <UserInterface
                    localStoreStage={localStoreStage}
                    searchRequest={searchRequest}
                    postCatRequest={postCatRequest}
                    postRequest={postRequest}
                    newsCatRequest={newsCatRequest}
                    setPosthRequest={setPosthRequest}
                    setPostCatRequest={setPostCatRequest}
                    setNewsCatRequest={setNewsCatRequest}
                    changeUrl={changeUrl}
                  />
                }
              ></Route>
            </Routes>
          </main>
          <Footer localStoreStage={localStoreStage} />
        </>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default App;
