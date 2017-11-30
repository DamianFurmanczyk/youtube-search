import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/auth";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: "Browse",
      query: ""
    };

    this.handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
      name === "Sign-in with google" && this.props.signIn();
      name === "Sign out" && this.props.signOut();
      name === "Playlists" && this.props.history.push("/playlists");
      name === "Browse" && this.props.history.push("/");
    };
  }

  render() {
    const { activeItem } = this.state;
    const { auth } = this.props;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name="Browse"
            active={activeItem === "Browse"}
            onClick={this.handleItemClick}
          />

          {!auth && (
            <Menu.Item
              name="Sign-in with google"
              active={activeItem === "Sign-in with google"}
              onClick={this.handleItemClick}
            />
          )}

          {auth && (
            <Menu.Item
              name="Sign out"
              active={activeItem === "Sign out"}
              onClick={this.handleItemClick}
            />
          )}
          {auth && (
            <Menu.Item
              name="Playlists"
              active={activeItem === "Playlists"}
              onClick={this.handleItemClick}
            />
          )}
          <Menu.Item position="right">
            <SearchForm history={this.props.history} />
          </Menu.Item>
        </Menu>
      </Segment>
    );
  }
}

export default connect(
  ({ auth }) => {
    return { auth };
  },
  { signIn, signOut }
)(SearchBar);
