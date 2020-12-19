import React, { Component } from "react";
import Selector from "./Selector";

class Book extends Component {
  render() {
    const { book, shelves, onUpdateBook } = this.props;
    const { title, authors, imageLinks } = book;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              // backgroundSize: "cover",
              backgroundImage: `url(${
                imageLinks
                  ? imageLinks.thumbnail
                  : //TODO: Find nicer image
                    "https://www.doakgolf.com/wp-content/uploads/book-na-1.jpg"
              })`,
            }}
          />
          <Selector book={book} shelves={shelves} onUpdateBook={onUpdateBook} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  }
}

export default Book;
