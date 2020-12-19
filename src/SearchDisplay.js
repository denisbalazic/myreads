import React, { Component } from "react";
import Book from "./Book";

class SearchDisplay extends Component {
  render() {
    const { books, shelves, onUpdateBook } = this.props;
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {books &&
            books.length > 0 &&
            books.map((book) => (
              <li>
                <Book key={book.id} book={book} shelves={shelves} onUpdateBook={onUpdateBook} />
              </li>
            ))}
        </ol>
      </div>
    );
  }
}

export default SearchDisplay;
