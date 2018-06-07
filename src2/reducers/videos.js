import { FETCH_VID } from "../actions/videos";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_VID:
      return _.mapKeys(action.payload, "id");
    case "SET_LOADER":
      return "loader";
    default:
      return state;
  }

  return state;
}
