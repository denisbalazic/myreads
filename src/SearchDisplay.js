import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class SearchDisplay extends Component {
  render() {
    const { books, foundBooks, shelves, onUpdateBook } = this.props;
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {foundBooks &&
            foundBooks.length > 0 &&
            foundBooks.map((foundBook) => {
              const index = books.findIndex((b) => b.id === foundBook.id);
              foundBook.shelf = index !== -1 ? books[index].shelf : "none";
              return (
                <li key={foundBook.id}>
                  <Book book={foundBook} shelves={shelves} onUpdateBook={onUpdateBook} />
                </li>
              );
            })}
        </ol>
      </div>
    );
  }
}

SearchDisplay.propTypes = {
  books: PropTypes.array,
  foundBooks: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default SearchDisplay;
