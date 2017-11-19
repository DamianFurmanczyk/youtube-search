import axios from "axios";

import search from "youtube-search";

export const FETCH_VID = "fetch video";
const API_KEY = "AIzaSyDHFzAEOzHn_62UGfc2-z0Gh9D9k5rUkaE";
var opts = {
  maxResults: 10,
  key: API_KEY
};

export const fetchMovie = query => dispatch => {
  return search(query, opts, function(err, results) {
    if (err) return dispatch({ type: FETCH_VID, payload: err });
    dispatch({ type: FETCH_VID, payload: results });
  });
};
