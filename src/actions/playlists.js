import { db } from "../firebase";
const playlistsRef = db.ref("/playlists");

export const updatePlaylists = PLAYLISTS => {
  console.log(PLAYLISTS);
  return {
    type: "UPDATE_PLAYLIST",
    payload: PLAYLISTS
  };
};

export const pushPlaylist = (userUid, PLAYLISTNAME) => {
  return dispatch => {
    playlistsRef.child(userUid).push(PLAYLISTNAME);
    // next steps: based on playlistname create playlistref.child(userUid).child(playlistname) and then u push the video ref
  };
};

export const observePlaylistsChanges = () => {
  console.log("observing playlists");
  return dispatch => {
    playlistsRef.on("value", data => {
      console.log("playlist has been added to db");
      console.log(data.val());
      dispatch(updatePlaylists(data.val()));
    });
  };
};
