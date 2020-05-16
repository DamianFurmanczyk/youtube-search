import axios from "axios";

import search from "youtube-search";

let API_KEY = "AIzaSyBuqr8Iehmgl9BpbCes_HXSzgNqXJSUF0I";
var opts = {
  key: API_KEY
};

export const FETCH_VID = "fetch video";
export const SELECT_VIDEO = "select video";

export const fetchMovies = (query, maxResults = 10) => dispatch => {
  opts.maxResults = maxResults;

  return search(query, opts, function(err, results) {
    if (err) return dispatch({ type: FETCH_VID, payload: err });
    dispatch({ type: FETCH_VID, payload: results });
  });
};

export function setLoader() {
  return {
    type: "SET_LOADER"
  };
}
