// sorry in advance, things got pretty spaghetti there

import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Checkbox } from "semantic-ui-react";
import { Link } from "react-router-dom";
import _ from "lodash";

import Loader from "./Loader.fn";

import {removePlaylist, pushPlaylist} from '../actions/playlists'

class AuthPlaylists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      removing: false
    }

    this.removePlaylist = this.removePlaylist.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { history } = this.props;

    if (!nextProps.auth) history.push("/");
  }

  render() {
    const { auth, playlists, history } = this.props;
    const {removing} = this.state;

    if (!auth) return <Loader />;
    if(!playlists || playlists && !playlists[auth.uid]) {
      return <p className='text-center'>It's empty in here! {this.renderPlaylistAdder()}</p>
    }
    const userPlaylists = playlists[auth.uid];

    return (
      <div className='text-center'>
        <h1 className> Your Playlists:</h1>
        <p>
          <Checkbox 
          onChange={e => this.setState({removing: !removing})} 
          checked={removing} 
          label={<label>Removing mode {removing && 'on' || 'off'}</label>} />
        </p>
        {!removing && <ul className="playlists-list">
          {_.map(userPlaylists, (obj, key) => {
            return (
              <li key={key}>
                <h2 className="text-center">
                  <Link to={`/playlists/${obj}`}>{obj}</Link>
                </h2>
              </li>
            );
          })}
        </ul>}
        {removing && <ul className="playlists-list">
          {_.map(userPlaylists, (obj, key) => {
            return (
              <li key={key}>
                <h2 className="text-center">
                  <a className='playlist-remove' onClick={e => {this.removePlaylist(e, obj, auth, key)}}>{obj}</a>
                </h2>
              </li>
            );
          })}
        </ul>}
        {this.renderPlaylistAdder()}
      </div>
    );
  }

  renderPlaylistAdder() {
    const {auth, pushPlaylist} = this.props;

    return(<h2> <p className='addPlaylist' 
    onClick={e => pushPlaylist(auth.uid, 
    prompt('Give it a name: ', '') || null
    )}>Add new...</p> </h2>);
  }

  removePlaylist(e, obj, auth, plKey) {
    e.preventDefault();
    this.props.removePlaylist(auth.uid, obj, plKey)
  }
}

export default connect(({ playlists, auth }) => {
  return {
    playlists,
    auth
  };
}, {removePlaylist, pushPlaylist})(AuthPlaylists);
