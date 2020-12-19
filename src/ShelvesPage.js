import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

class ShelvesPage extends Component {
  render() {
    const { books, shelves, onUpdateBook } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf, index) => (
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
}

export default ShelvesPage;
