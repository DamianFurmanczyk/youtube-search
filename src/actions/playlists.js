import { db } from "../firebase";
export const playlistsRef = db.ref("/playlists");

export const updatePlaylists = PLAYLISTS => {
  //console.log(PLAYLISTS);
  return {
    type: "UPDATE_PLAYLIST",
    payload: PLAYLISTS
  };
};

export const pushPlaylist = (userUid, playlistName) => {
  return dispatch => {
    playlistsRef.child(userUid).push(playlistName);
  };
};

export const insertIntoPlaylist = (userUid, playlistName, videoUid) => {
  return dispatch => {
    playlistsRef.child(userUid + "-" + playlistName).push(videoUid);
  };
};

export const removePlaylist = (
  userUid,
  playlistName,
  playlistUid
) => {
  return dispatch => {
    playlistsRef
      .child(userUid)
      .child(playlistUid)
      .remove();
    playlistsRef
      .child(userUid + "-" + playlistName)
      .set(null);
  };
};

export const removeVidFromPlaylist = (
  userUid,
  playlistName,
  videoUid
) => {
  return dispatch => {
    playlistsRef
      .child(userUid + "-" + playlistName)
      .child(videoUid)
      .set(null);
  };
}

export const observePlaylistsChanges = () => {
  //console.log("observing playlists");
  return dispatch => {
    playlistsRef.on("value", data => {
      //console.log("playlist has been added to db");
      //console.log(data.val());
      dispatch(updatePlaylists(data.val()));
    });
  };
};
