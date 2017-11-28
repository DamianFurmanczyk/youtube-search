import React from "react";
import { playlistsRef } from "../actions/playlists";
import { Button, Dropdown, Icon } from "semantic-ui-react";

export default class DropdownItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      removing: false
    };
  }

  render() {
    const {
      pl,
      auth,
      insertIntoPlaylist,
      currentVideoId,
      playlistUid
    } = this.props;
    const { hover, removing } = this.state;
    return (
      <Dropdown.Item
        onClick={e => {
          if (e.target.classList.contains("remove")) {
            if (!window.confirm("Are you sure?")) return;
            playlistsRef
              .child(auth.uid)
              .child(playlistUid)
              .remove();
            playlistsRef.child(auth.uid + "-" + pl).set(null);
            // ^ action wouldnt work
          } else {
            insertIntoPlaylist(auth.uid, pl, currentVideoId);
          }
        }}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        className="playlist-tile"
      >
        <span>{this.props.pl}</span>
        {hover && <Icon id="asd" name="remove circle" />}
      </Dropdown.Item>
    );
  }
}
