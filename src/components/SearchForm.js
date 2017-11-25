import React, { Component } from "react";
import { Input, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchMovies } from "../actions/videos";
import { setQuery } from "../actions/query";

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
    console.log(this.props);
    console.log(this.state.query);
    e.preventDefault();
    this.props.fetchMovies(this.state.query);
    this.props.setQuery(this.state.query);
    this.props.history.push(`/`);
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
  { fetchMovies, setQuery }
)(SearchForm);
