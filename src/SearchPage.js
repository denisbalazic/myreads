import React, { Component } from "react";
import SearchInput from "./SearchInput";
import SearchDisplay from "./SearchDisplay";
import * as BooksAPI from "./BooksAPI";

class SearchPage extends Component {
  state = {
    query: "",
    foundBooks: [],
  };
  updateQuery = (e) => {
    const query = e.target.value;
    this.setState({ query: query });
    BooksAPI.search(query).then((books) => {
      this.setState({ foundBooks: books });
    });
  };
  render() {
    const { query, foundBooks } = this.state;
    const onUpdateBook = this.props.onUpdateBook;
    return (
      <div className="SearchPage">
        <SearchInput query={query} onInputChange={this.updateQuery} />
        <SearchDisplay books={foundBooks} onUpdateBook={onUpdateBook} />
      </div>
    );
  }
}

export default SearchPage;
