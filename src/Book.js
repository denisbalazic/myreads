import React, { Component } from "react";
import Selector from "./Selector";

class Book extends Component {
  render() {
    const { title, authors, id, imageLinks } = this.props.book;
    console.log("from book: ", this.props.bookTitle);
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${imageLinks.thumbnail})`,
            }}
          />
          <Selector />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  }
}

export default Book;
