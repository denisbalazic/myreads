import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Shelf from "./Shelf";

function ShelvesPage(props) {
  const { books, shelves, onUpdateBook } = props;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelves.map((shelf) => (
          <Shelf
            key={shelf.name}
            books={books && books.filter((book) => book.shelf === shelf.name)}
            title={shelf.displayName}
            shelves={shelves}
            onUpdateBook={onUpdateBook}
          />
        ))}
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
}

ShelvesPage.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default ShelvesPage;
