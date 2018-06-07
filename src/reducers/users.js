export default function(state = {}, action) {
  switch (action.type) {
    case "ADD_USER":
      //console.log("add user ", action.payload);
      return action.payload;
    default:
      return state;
  }

  return state;
}
