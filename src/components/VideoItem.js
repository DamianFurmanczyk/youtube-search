import React from "react";
import { Item } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { removeVidFromPlaylist } from '../actions/playlists'

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { vid, removing, authUid, plName, vidUid } = this.props;
    if(!removing) return (
      //
      <Item
        onClick={e => this.props.history.push(`/show/${vid.id}`)}
        className="videoItem"
      >
        {/*  */}
        {vid.thumbnails && (
          <Item.Image
            size="medium"
            src={
              vid.thumbnails.high.url ||
              vid.thumbnails.medium.url ||
              vid.thumbnails.low.url
            }
          />
        )}

        <Item.Content verticalAlign="middle">
          <Item.Header>{vid.title || "Missing title"}</Item.Header>
          <Item.Meta>Author: {vid.channelTitle}</Item.Meta>
          <Item.Description>
            {vid.description || "No description"}
          </Item.Description>
        </Item.Content>
      </Item>
    );

    return (
      <Item
      onClick={e => {this.props.removeVidFromPlaylist(authUid, plName, vidUid)}}
      className="videoItem"
    >
      {/*  */}
      {vid.thumbnails && (
        <Item.Image
          size="medium"
          src={
            vid.thumbnails.high.url ||
            vid.thumbnails.medium.url ||
            vid.thumbnails.low.url
          }
        />
      )}

      <Item.Content verticalAlign="middle">
        <Item.Header>{vid.title || "Missing title"}</Item.Header>
        <Item.Meta>Author: {vid.channelTitle}</Item.Meta>
        <Item.Description>
          {vid.description || "No description"}
        </Item.Description>
      </Item.Content>
    </Item>
    )
  }
}

export default connect(null, {removeVidFromPlaylist})(VideoItem);