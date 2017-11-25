import React from "react";
import { Embed, Segment, Rail } from "semantic-ui-react";

const EmbedView = ({ selectedVideo }) => {
  console.log(selectedVideo);

  return (
    <div>
      <Embed
        id="O6Xo21L0ybE"
        iframe={{
          allowFullScreen: true,
          src: `https://www.youtube.com/embed/${selectedVideo.id}`
        }}
        source="youtube"
      />
      <Segment.Group raised>
        <Segment>{selectedVideo.title}</Segment>
        <Segment size="tiny">{selectedVideo.channelTitle}</Segment>
        <Segment>{selectedVideo.description}</Segment>
      </Segment.Group>
    </div>
  );
};

export default EmbedView;
