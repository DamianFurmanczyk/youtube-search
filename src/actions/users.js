import { db } from "../firebase";
const usersRef = db.ref("/users");

export const addUser = user => {
  return {
    type: "ADD_USER",
    payload: user
  };
};

export const observeUsersChanges = () => {
  return dispatch => {
    usersRef.on("child_added", data => {
      dispatch(addUser(data.val()));
    });
  };
};
