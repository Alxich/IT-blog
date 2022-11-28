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
      <Route exact path="/post" element={<InnerPage images={images} />} />
      <Route exact path="/category" element={<Category images={images} />} />
      <Route exact path="/contacts" element={<Contacts images={images} />} />
      <Route
        exact
        path="/searchresult"
        element={<SearchResult images={images} />}
      />
      <Route exact path="/search" element={<SearchInput images={images} />} />
      <Route exact path="/*" element={<FailPage images={images} />} />
    </Routes>
  );
}

export default UserInterface;
