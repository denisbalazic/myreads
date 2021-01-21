import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Selector from "./Selector";
import * as BooksAPI from "./BooksAPI";

export default function BookPage(props) {
  const { shelves, onUpdateBook } = props;

  const [book, setBook] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(async () => {
    const book = await BooksAPI.get(props.match.params.bookId);
    setBook(book);
    setIsLoaded(true);
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="book-page">
        <div className="book-header">
          <img src={book.imageLinks.thumbnail} alt="book cover" />
          <div className="book-card">
            <h1>{book.title}</h1>
            <h4>{book.subtitle}</h4>
            <h3>{book.authors && book.authors.join(", ")}</h3>
            <p>
              {book.publisher}, {book.publishedDate}
            </p>
            <p>Pages: {book.pageCount}</p>
          </div>
          <Link to={props.location.state.pathname}>
            <button className="close-search">Close</button>
          </Link>
        </div>
        <p>{book.description}</p>
        <a href={book.infoLink}>More about {book.title}</a>
        <Selector book={book} shelves={shelves} onUpdateBook={onUpdateBook} />
      </div>
    );
  }
}

BookPage.propTypes = {
  shelves: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};
