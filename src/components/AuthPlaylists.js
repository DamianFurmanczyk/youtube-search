import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import Loader from "./Loader.fn";
import AuthPlaylistsItem from "./AuthPlaylistsItem.fn";

class AuthPlaylists extends Component {
  componentWillReceiveProps(nextProps) {
    const { history } = this.props;

    if (!nextProps.auth) history.push("/");
  }

  render() {
    const { auth, playlists, history } = this.props;

    if (!auth) return <Loader />;
    const userPlaylists = playlists[auth.uid];

    console.log(auth);
    console.log("auth");
    console.log(playlists);
    console.log(userPlaylists);

    return _.map(userPlaylists, (obj, key) => {
      console.log(obj);
      return <div key={key}>key, {key}</div>;
    });
  }
}

export default connect(({ playlists, auth }) => {
  return {
    playlists,
    auth
  };
})(AuthPlaylists);
