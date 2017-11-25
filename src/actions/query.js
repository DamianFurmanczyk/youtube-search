export const SET_QUERY = "SET_QUERY";

export const setQuery = query => {
  return {
    type: SET_QUERY,
    payload: query
  };
};
