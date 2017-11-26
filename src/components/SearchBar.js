import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/auth";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: "Sign-in with google",
      query: ""
    };

    this.handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
      name === "Sign-in with google" && this.props.signIn();
      name === "Sign out" && this.props.signOut();
      name === "Account" && this.props.history.push(`/${name}`);
    };
  }

  render() {
    const { activeItem } = this.state;
    const { auth } = this.props;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
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
              name="Account"
              active={activeItem === "Account"}
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
