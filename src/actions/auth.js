import { db, auth, googleAuthProvider } from "../firebase";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export function signIn() {
  return dispatch => {
    // zwracasz fcje zamiast obiektu i stad wie ze redux thunk is used + szy param to oczywiscie dispatch
    auth.signInWithPopup(googleAuthProvider);
  };
}

export const signOut = () => dispatch => {
  return auth.signOut();
};

export const observeAuthChanges = () => dispatch => {
  auth.onAuthStateChanged(user => {
    console.log("change");
    if (user) return dispatch({ type: SIGN_IN, payload: user });
    if (!user) return dispatch({ type: SIGN_OUT });
  });
};
