import { combineReducers } from "redux";

import appData from "./app";
import postsData from "./post";
import newsData from "./news";
import contacts from "./contacts";
import admin from "./admin";

const rootReducers = combineReducers({
  appData,
  postsData,
  newsData,
  contacts,
  admin,
});

export default rootReducers;
