import React from "react";
import { Button, Dropdown, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  pushPlaylist,
  insertIntoPlaylist,
  removePlaylist
} from "../actions/playlists";
import _ from "lodash";

import DropdownItem from "./DropdownItem";

const PlaylistDropdown = props => {
  let PlayilistItems = null;

  const { playlists, pushPlaylist, auth, currentVideoId } = props;

  if (!auth)
    return (
      <Button attached="top" disabled>
        Sign in to manage playlists...
      </Button>
    );

  if (auth) {
    if (playlists && playlists[auth.uid]) {
      PlayilistItems = _.map(playlists[auth.uid], (pl, key) => {
        // pl=playlist name
        return (
          <DropdownItem
            title="add to playlist"
            key={key}
            playlistUid={key}
            pl={pl}
            {...props}
          />
        );
      });
    }
  } else {
    return false;
  }

  return (
    <Button attached="top">
      <Dropdown text="Add to playlist..." floating button attached="top">
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              pushPlaylist(auth.uid, prompt("Name the playlist"));
            }}
          >
            Create new...
          </Dropdown.Item>
          {PlayilistItems && PlayilistItems}
        </Dropdown.Menu>
      </Dropdown>
    </Button>
  );
};

export default connect(
  ({ playlists, auth }, ownProps) => {
    return { playlists, auth };
  },
  { pushPlaylist, insertIntoPlaylist, removePlaylist }
)(PlaylistDropdown);
