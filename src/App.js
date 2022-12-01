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

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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
          />
          <main className="wrapper">
            <Routes>
              <Route
                exact
                path="/admin/*"
                element={<AdminInterface localStoreStage={localStoreStage} />}
              ></Route>
              <Route
                exact
                path="/*"
                element={
                  <UserInterface
                    localStoreStage={localStoreStage}
                    searchRequest={searchRequest}
                    postRequest={postRequest}
                    setPosthRequest={setPosthRequest}
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
