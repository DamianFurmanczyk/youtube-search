import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Videos from "./Videos";

export default class Main extends Component {
  render() {
    return (
      <main>
        <SearchBar />
        <Videos />
      </main>
    );
  }
}
