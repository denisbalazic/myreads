import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class Shelf extends Component {
  render() {
    const { books, title, shelves, onUpdateBook } = this.props;

    return (
      <div className="bookshelf">
        <div className="bookshelf-title">
          <h2>{title}</h2>
          <button className="btn-small">remove shelf</button>
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
  title: PropTypes.string.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default Shelf;
