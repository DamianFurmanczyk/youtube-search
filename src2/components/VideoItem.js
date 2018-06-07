import React from "react";
import { Item } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class VideoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { vid } = this.props;
    return (
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
  }
}
