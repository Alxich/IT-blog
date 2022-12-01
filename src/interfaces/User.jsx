import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  Home,
  InnerPage,
  Category,
  Contacts,
  SearchResult,
} from "../Pages/User";
import FailPage from "../Pages/FailPage";

function UserInterface({
  localStoreStage,
  searchRequest,
  postRequest,
  setPosthRequest,
}) {
  const images = localStoreStage.images;

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Home
            localStoreStage={localStoreStage}
            images={images}
            setPosthRequest={setPosthRequest}
          />
        }
      />
      <Route
        exact
        path="/post"
        element={
          <InnerPage
            localStoreStage={localStoreStage}
            postRequest={postRequest}
            images={images}
          />
        }
      />
      <Route
        exact
        path="/category"
        element={
          <Category
            localStoreStage={localStoreStage}
            setPosthRequest={setPosthRequest}
            images={images}
          />
        }
      />
      <Route
        exact
        path="/contacts"
        element={<Contacts localStoreStage={localStoreStage} images={images} />}
      />
      <Route
        exact
        path="/searchresult"
        element={
          <SearchResult
            localStoreStage={localStoreStage}
            images={images}
            searchRequest={searchRequest}
            setPosthRequest={setPosthRequest}
          />
        }
      />
      <Route
        exact
        path="/*"
        element={<FailPage localStoreStage={localStoreStage} images={images} />}
      />
    </Routes>
  );
}

export default UserInterface;
