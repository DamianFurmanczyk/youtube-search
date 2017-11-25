import React, { Component } from "react";
import {
  Input,
  Form,
  Button,
  Embed,
  Grid,
  Container,
  Item
} from "semantic-ui-react";
import _ from "lodash";

import { connect } from "react-redux";
import { selectVideo } from "../actions/videos";

import VideoItem from "./dumb/VideoItem";
import VideoEmbed from "./dumb/VideoEmbed";

class VideosView extends Component {
  constructor(props) {
    super(props);

    this.showVideos = this.showVideos.bind(this);
  }

  showVideos() {
    return _.map(this.props.videos, (vid, key) => (
      <VideoItem key={key} selectVideo={this.props.selectVideo} vid={vid} />
    ));
  }

  render() {
    return (
      <Container>
        {this.props.selectedVideo ? (
          <VideoEmbed selectedVideo={this.props.selectedVideo} />
        ) : (
          <Item.Group divided>{this.showVideos()}</Item.Group>
        )}
      </Container>
    );
  }
}

export default connect(
  ({ videos, selectedVideo }) => {
    return { videos, selectedVideo };
  },
  { selectVideo }
)(VideosView);
