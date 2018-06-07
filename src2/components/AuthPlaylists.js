import React, { Component } from "react";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import _ from "lodash";

import Loader from "./Loader.fn";

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

    return (
      <div>
        <h1 className="text-center"> Your Playlists:</h1>
        <ul className="playlists-list">
          {_.map(userPlaylists, (obj, key) => {
            return (
              <li>
                <h2 key={key} className="text-center">
                  <Link to={`/playlists/${obj}`}>{obj}</Link>
                </h2>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(({ playlists, auth }) => {
  return {
    playlists,
    auth
  };
})(AuthPlaylists);
