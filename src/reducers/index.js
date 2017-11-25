import { combineReducers } from "redux";
import videos from "./videos";
import query from "./query";
import auth from "./auth";

export default combineReducers({
  videos,
  query,
  auth
});
