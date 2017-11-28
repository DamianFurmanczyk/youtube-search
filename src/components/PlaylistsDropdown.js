import React from "react";
import { Button, Dropdown, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { pushPlaylist, insertIntoPlaylist } from "../actions/playlists";
import _ from "lodash";

class DropdownItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  render() {
    const { pl, auth, insertIntoPlaylist, currentVideoId } = this.props;
    return (
      <Dropdown.Item
        onClick={() => {
          insertIntoPlaylist(auth.uid, pl, currentVideoId);
        }}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        className="playlist-tile"
      >
        <span>{this.props.pl}</span>
        {this.state.hover && (
          <Icon onClick={() => alert("unremovable yet")} name="remove circle" />
        )}
      </Dropdown.Item>
    );
  }
}

const PlaylistDropdown = props => {
  let PlayilistItems = null;

  const { playlists, pushPlaylist, auth, currentVideoId } = props;

  if (auth) {
    if (playlists[auth.uid]) {
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
  { pushPlaylist, insertIntoPlaylist }
)(PlaylistDropdown);
