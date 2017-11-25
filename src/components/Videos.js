import React, { Component } from "react";
import {
  Input,
  Form,
  Button,
  Segment,
  Item,
  Dimmer,
  Loader
} from "semantic-ui-react";
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
    const { history, videos } = this.props;
    const length = Object.keys(videos).length;

    return (
      <div>
        <Segment attached>
          <Item.Group divided>
            {length !== 0 ? (
              _.map(videos, (vid, key) => (
                <VideoItem key={key} history={history} vid={vid} />
              ))
            ) : (
              <Loader active inline="centered">
                Waiting for input
              </Loader>
            )}
          </Item.Group>
        </Segment>
        {length !== 0 && (
          <Button onClick={this.onLoadMore} attached="bottom">
            Load more
          </Button>
        )}
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
