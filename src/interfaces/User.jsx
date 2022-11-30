import React from "react";
import { Route, Routes } from "react-router-dom";

import { SearchInput } from "../components/index";
import {
  Home,
  InnerPage,
  Category,
  Contacts,
  SearchResult,
} from "../Pages/User";
import FailPage from "../Pages/FailPage";

function UserInterface({ localStoreStage }) {
  const images = localStoreStage.images;
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home localStoreStage={localStoreStage} images={images} />}
      />
      <Route
        exact
        path="/post"
        element={
          <InnerPage localStoreStage={localStoreStage} images={images} />
        }
      />
      <Route exact path="/category" element={<Category localStoreStage={localStoreStage} images={images} />} />
      <Route
        exact
        path="/contacts"
        element={<Contacts localStoreStage={localStoreStage} images={images} />}
      />
      <Route
        exact
        path="/searchresult"
        element={
          <SearchResult localStoreStage={localStoreStage} images={images} />
        }
      />
      <Route
        exact
        path="/search"
        element={
          <SearchInput localStoreStage={localStoreStage} images={images} />
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
