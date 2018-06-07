import React, { Component } from "react";
import { Input, Form, Button, Segment, Item } from "semantic-ui-react";
import _ from "lodash";

import { connect } from "react-redux";
import { fetchMovies } from "../actions/videos";
import { setQuery } from "../actions/query";

import VideoItem from "./VideoItem";
import Loader from "./Loader.fn";

class VideosView extends Component {
  constructor(props) {
    super(props);

    this.onLoadMore = this.onLoadMore.bind(this);
  }

  onLoadMore() {
    const { fetchMovies, query, videos } = this.props;
    console.log(query);
    const length = Object.keys(videos).length;
    fetchMovies(query, length + 5);
  }

  componentDidMount() {
    this.props.fetchMovies(this.props.match.params.query);
  }

  componentWillReceiveProps = (nextProps, nextState) => {
    const prevQuery = this.props.match.params.query;
    const newQuery = nextProps.match.params.query;

    prevQuery !== newQuery && this.props.fetchMovies(newQuery);
    prevQuery !== newQuery && this.props.setQuery(newQuery || "");
  };

  render() {
    const { history, videos } = this.props;
    const length = Object.keys(videos).length;

    if (videos === "loader") {
      return <Loader />;
    }

    return (
      <div className="video-list">
        <Segment attached>
          <Item.Group divided>
            {length !== 0 ? (
              _.map(videos, (vid, key) => (
                <VideoItem key={key} history={history} vid={vid} />
              ))
            ) : (
              <p>Nothing found...</p>
            )}
          </Item.Group>
        </Segment>
        {length !== 0 &&
          length < 50 &&
          length % 5 === 0 && (
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
  { fetchMovies, setQuery }
)(VideosView);
