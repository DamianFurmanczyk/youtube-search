import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Form, Button, Segment, Item } from "semantic-ui-react";
import _ from "lodash";

import Loader from "./Loader.fn";
import VideoItem from "./VideoItem";

const ShowPlaylist = ({ playlists, auth, match, history }) => {
  if (!auth) return <Loader />;

  console.log("playlists");
  console.log(playlists[`${auth.uid}-${match.params.name}`]);

  const currentPlaylist = playlists[`${auth.uid}-${match.params.name}`];
  if (!currentPlaylist === null) return <Loader />;

  return (
    <div className="video-list">
      <Segment>
        <Item.Group divided>
          {currentPlaylist ? (
            // evals to undefined if its empty
            _.map(currentPlaylist, (vid, key) => (
              <VideoItem key={key} history={history} vid={vid} />
            ))
          ) : (
            <Item>
              <p>It's empty in here.</p>
            </Item>
          )}
        </Item.Group>
      </Segment>
    </div>
  );
};

export default connect(({ playlists, auth }) => {
  return { playlists, auth };
})(ShowPlaylist);
