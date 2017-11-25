import React, { Component } from "react";
import { Input, Form, Button, Segment, Item } from "semantic-ui-react";
import _ from "lodash";

import { connect } from "react-redux";
import { fetchMovies } from "../actions/videos";

import VideoItem from "./VideoItem";

class VideosView extends Component {
  constructor(props) {
    super(props);

    this.onLoadMore = this.onLoadMore.bind(this);
  }

  onLoadMore() {
    const { fetchMovies, query, videos } = this.props;
    const length = Object.keys(videos).length;
    fetchMovies(query, length + 5);
  }

  render() {
    console.log(this.props.videos);
    return (
      <div>
        <Segment attached>
          <Item.Group divided>
            {_.map(this.props.videos, (vid, key) => (
              <VideoItem key={key} history={this.props.history} vid={vid} />
            ))}
          </Item.Group>
        </Segment>
        <Button onClick={this.onLoadMore} attached="bottom">
          Load more
        </Button>
      </div>
    );
  }
}

export default connect(
  ({ videos, query }) => {
    return { videos, query };
  },
  { fetchMovies }
)(VideosView);
