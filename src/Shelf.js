import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class Shelf extends Component {
  render() {
    const { books, shelf, shelves, onUpdateBook, onRemoveShelf } = this.props;

    return (
      <div className="bookshelf">
        <div className="bookshelf-title">
          <h2>{shelf.displayName}</h2>
          <button onClick={() => onRemoveShelf(shelf.name)} className="btn-small">
            remove shelf
          </button>
        </div>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books &&
              books.length > 0 &&
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
}

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default Shelf;
