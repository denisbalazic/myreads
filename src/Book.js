import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Selector from "./Selector";

class Book extends Component {
  render() {
    const { book, shelves, onUpdateBook } = this.props;
    const { title, authors, imageLinks } = book;
    return (
      <div className="book">
        <div className="book-top">
          <Link
            to={{ pathname: "/books/" + book.id, state: { pathname: window.location.pathname } }}
          >
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                // backgroundSize: "cover",
                backgroundImage: `url(${
                  imageLinks
                    ? imageLinks.thumbnail
                    : "https://www.doakgolf.com/wp-content/uploads/book-na-1.jpg"
                })`,
              }}
            />
          </Link>
          <Selector book={book} shelves={shelves} onUpdateBook={onUpdateBook} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.join(", ")}</div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default Book;
