export default function(state = {}, action) {
  switch (action.type) {
    case "UPDATE_PLAYLIST":
      return action.payload;
    default:
      return state;
  }

  return state;
}
