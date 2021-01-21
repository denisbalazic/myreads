import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

export default function SearchDisplay(props) {
  const { books, foundBooks, shelves, onUpdateBook } = props;

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

SearchDisplay.propTypes = {
  books: PropTypes.array,
  foundBooks: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};
