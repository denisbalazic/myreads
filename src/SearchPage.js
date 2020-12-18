import React, { Component } from "react";
import SearchInput from "./SearchInput";
import SearchDisplay from "./SearchDisplay";

class SearchPage extends Component {
  render() {
    const { books } = this.props;
    return (
      <div className="SearchPage">
        <SearchInput />
        <SearchDisplay />
      </div>
    );
  }
}

export default SearchPage;
