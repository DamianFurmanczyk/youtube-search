import { combineReducers } from "redux";
import videos from "./videos";
import selectedVideo from "./selectedVideo";

export default combineReducers({
  selectedVideo,
  videos
});
