import { SET_QUERY } from "../actions/query";

export default function(state = "", action) {
  switch (action.type) {
    case SET_QUERY:
      return action.payload;
    default:
      return state;
  }

  return state;
}
