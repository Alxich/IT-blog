import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Footer, Header, LoadingPage } from "./components";
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
  }, [loadedTarget]);

  const localStoreStage = useSelector(({ appData }) => appData.defaultData);
  const [menuOpen, setMenuOpen] = React.useState();

  React.useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      {isLoaded ? (
        <>
          <Header
            setMenuOpen={setMenuOpen}
            menuOpen={menuOpen}
            localStoreStage={localStoreStage}
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
                element={<UserInterface localStoreStage={localStoreStage} />}
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
