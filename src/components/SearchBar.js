import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import SearchForm from "./SearchForm";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: "home",
      query: ""
    };

    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="messages"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="friends"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
          <Menu.Item position="right">
            <SearchForm history={this.props.history} />
          </Menu.Item>
        </Menu>
      </Segment>
    );
  }
}
