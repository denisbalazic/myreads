import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
  render() {
    const { books } = this.props;
    console.log("from shelf: ", books);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li>
                <Book key={book.id} book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
