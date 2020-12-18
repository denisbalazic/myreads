import React, { Component } from "react";
import Book from "./Book";

class SearchDisplay extends Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          <li>
            {/* {books.map((book) => (
              <li>
                <Book key={book.id} book={book} />
              </li>
            ))} */}
          </li>
        </ol>
      </div>
    );
  }
}

export default SearchDisplay;
