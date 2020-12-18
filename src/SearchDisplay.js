import React, { Component } from "react";
import Book from "./Book";

class SearchDisplay extends Component {
  render() {
    const { books, shelves, onUpdateBook } = this.props;
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          <li>
            {books.map((book) => (
              <li>
                <Book key={book.id} book={book} shelves={shelves} onUpdateBook={onUpdateBook} />
              </li>
            ))}
          </li>
        </ol>
      </div>
    );
  }
}

export default SearchDisplay;
