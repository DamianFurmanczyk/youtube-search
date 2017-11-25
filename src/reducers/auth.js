import { SIGN_IN, SIGN_OUT } from "../actions/auth";
import _ from "lodash";

export default function auth(state = null, action) {
  switch (action.type) {
    case SIGN_IN:
      console.log(action.payload);
      return _.pick(action.payload, ["email", "uid", "displayName"]);
    case SIGN_OUT:
      return null;
    default:
      return state;
  }

  return state;
}
