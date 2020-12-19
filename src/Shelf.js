import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
  render() {
    const { books, title, shelves, onUpdateBook } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.length > 0 &&
              books.map((book) => (
                <li>
                  <Book key={book.id} book={book} shelves={shelves} onUpdateBook={onUpdateBook} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
