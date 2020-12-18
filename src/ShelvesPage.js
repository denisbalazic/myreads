import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

class ShelvesPage extends Component {
  render() {
    const { books, onUpdateBook } = this.props;
    const shelves = ["currentlyReading", "wantToRead", "read"];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf, index) => (
            <Shelf
              key={shelf}
              books={books.filter((book) => book.shelf === shelf)}
              title={shelf}
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
