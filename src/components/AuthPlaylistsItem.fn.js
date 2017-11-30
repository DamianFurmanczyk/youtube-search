import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import { Link } from "react-router-dom";
import _ from "lodash";

const AuthPlaylistsList = ({ playlists }) => {
  return _.map(playlists, (pl, i) => {
    return (
      <Item.Group>
        <Item onClick={e => this.props.history.push(`/`)} className="videoItem">
          asd
        </Item>
      </Item.Group>
    );
  });
};
