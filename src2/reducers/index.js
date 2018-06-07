import { combineReducers } from "redux";
import videos from "./videos";
import query from "./query";
import auth from "./auth";
import users from "./users";
import playlists from "./playlists";

export default combineReducers({
  videos,
  query,
  auth,
  users,
  playlists
});
