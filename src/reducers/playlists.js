export default function(state = {}, action) {
  switch (action.type) {
    case "UPDATE_PLAYLIST":
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }

  return state;
}
