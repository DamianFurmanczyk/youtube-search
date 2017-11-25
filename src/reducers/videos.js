import { FETCH_VID } from "../actions/videos";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_VID:
      return _.mapKeys(action.payload, "id");
    default:
      return state;
  }

  return state;
}
