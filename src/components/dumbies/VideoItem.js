import React from "react";
import { Item } from "semantic-ui-react";

const VideoItem = ({ vid, selectVideo }) => {
  return (
    //
    <Item onClick={e => selectVideo(vid)} className="videoItem">
      {/*  */}
      <Item.Image size="medium" src={vid.thumbnails.high.url} />
      <Item.Content verticalAlign="middle">
        <Item.Header>{vid.title}</Item.Header>
        <Item.Meta>Author: {vid.channelTitle}</Item.Meta>
        <Item.Description>{vid.description}</Item.Description>
      </Item.Content>
    </Item>
  );
};

export default VideoItem;
