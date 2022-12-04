import { combineReducers } from "redux";

import appData from "./app";
import postsData from "./post";
import newsData from "./news";
import { contacts } from "./contacts";

const rootReducers = combineReducers({
  appData,
  postsData,
  newsData,
  contacts,
});

export default rootReducers;
