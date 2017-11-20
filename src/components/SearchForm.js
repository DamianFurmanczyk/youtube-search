import React, { Component } from "react";
import { Input, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchMovie, selectVideo } from "../actions/videos";

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };

    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    e.preventDefault();
    this.props.fetchMovie(this.state.query);
    this.props.selectVideo(null);
  }

  render() {
    return (
      <Form onSubmit={this.onSearch}>
        <Input
          type="text"
          value={this.state.query}
          onChange={e => this.setState({ query: e.target.value })}
        />
        <Button type="submit">Search</Button>
      </Form>
    );
  }
}

export default connect(
  videos => {
    return { videos };
  },
  { fetchMovie, selectVideo }
)(SearchForm);
