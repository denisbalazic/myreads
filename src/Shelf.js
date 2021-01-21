import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

export default function Shelf(props) {
  const { books, title, shelves, onUpdateBook } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.length > 0 &&
            books.map((book) => (
              <li key={book.id}>
                <Book book={book} shelves={shelves} onUpdateBook={onUpdateBook} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};
