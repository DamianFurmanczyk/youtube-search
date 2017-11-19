import "./App.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie } from "./actions/videos";
import _ from "lodash";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    e.preventDefault();
    this.props.fetchMovie(this.state.query);
  }

  render() {
    const vids = this.props.videos;

    return (
      <div>
        <center>
          <form onSubmit={this.onSearch}>
            <input
              type="text"
              value={this.state.query}
              onChange={e => this.setState({ query: e.target.value })}
            />
            <button type="submit">Search</button>
            {console.log(vids)}
          </form>
        </center>
      </div>
    );
  }
}

// {vids !== {} &&
// _.mapKeys(this.props.videos, (vid, key) => console.log(vid))}

export default connect(
  videos => {
    return { videos };
  },
  { fetchMovie }
)(App);
