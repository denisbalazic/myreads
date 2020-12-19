import React, { Component } from "react";
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
              index !== -1 ? (foundBook.shelf = books[index].shelf) : (foundBook.shelf = "none");
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

export default SearchDisplay;
