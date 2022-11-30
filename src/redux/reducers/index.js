import { combineReducers } from "redux";

import appData from "./app";
import postsData from "./post";
import newsData from "./news";

const rootReducers = combineReducers({ appData, postsData, newsData });

export default rootReducers;
