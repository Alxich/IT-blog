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

function UserInterface() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/post" element={<InnerPage />} />
      <Route exact path="/category" element={<Category />} />
      <Route exact path="/contacts" element={<Contacts />} />
      <Route exact path="/searchresult" element={<SearchResult />} />
      <Route exact path="/search" element={<SearchInput />} />
      <Route exact path="/*" element={<FailPage />} />
    </Routes>
  );
}

export default UserInterface;
