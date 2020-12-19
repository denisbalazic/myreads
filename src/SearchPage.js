import React, { Component } from "react";
import SearchInput from "./SearchInput";
import SearchDisplay from "./SearchDisplay";
import * as BooksAPI from "./BooksAPI";

class SearchPage extends Component {
  state = {
    query: "",
    foundBooks: [],
    invalidQuery: false,
  };

  updateQuery = (e) => {
    const query = e.target.value;
    this.setState({ query: query });
    if (query === "") {
      this.setState({ foundBooks: [] });
      return;
    }
    BooksAPI.search(query).then((books) => {
      books.error
        ? this.setState({ foundBooks: [], invalidQuery: true })
        : this.setState({ foundBooks: books, invalidQuery: false });
    });
  };

  render() {
    const { query, foundBooks, invalidQuery } = this.state;
    const { books, shelves, onUpdateBook } = this.props;
    return (
      <div className="SearchPage">
        <SearchInput query={query} onInputChange={this.updateQuery} />
        {foundBooks && foundBooks.length > 0 && (
          <SearchDisplay
            books={books}
            foundBooks={foundBooks}
            shelves={shelves}
            onUpdateBook={onUpdateBook}
          />
        )}
        <p>{invalidQuery ? "Invalid query" : null}</p>
      </div>
    );
  }
}

export default SearchPage;
