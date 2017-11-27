import React from "react";
import { Button, Dropdown, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { pushPlaylist } from "../actions/playlists";
import _ from "lodash";

class DropdownItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dropdown.Item className="playlist-tile">
        <span>{this.props.pl}</span>
        <Icon
          onClick={() => alert("unremovable yet")}
          name="remove circle"
          size="large"
        />
      </Dropdown.Item>
    );
  }
}

const PlaylistDropdown = ({ playlists, pushPlaylist, auth }) => {
  let PlayilistItems = null;

  if (auth) {
    PlayilistItems = _.map(playlists[auth.uid], (pl, key) => {
      console.log(pl);
      console.log(key);
      return <DropdownItem key={key} pl={pl} />;
    });
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
  { pushPlaylist }
)(PlaylistDropdown);
