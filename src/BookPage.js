import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Selector from "./Selector";
import * as BooksAPI from "./BooksAPI";

class BookPage extends Component {
  state = {
    book: {},
    isLoaded: false,
  };
  async componentDidMount() {
    const book = await BooksAPI.get(this.props.match.params.bookId);
    this.setState({ isLoaded: true, book: book });
  }

  render() {
    const { shelves, onUpdateBook } = this.props;
    const { book } = this.state;
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="book-page">
          <div className="book-header">
            <img src={book.imageLinks.thumbnail} alt="book cover" />
            <div className="book-card">
              <h1>{book.title}</h1>
              <h4>{book.subtitle}</h4>
              <h3>{book.authors}</h3>
              <p>
                {book.publisher}, {book.publishedDate}
              </p>
              <p>Pages: {book.pageCount}</p>
            </div>
            <Link to="/">
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
}

BookPage.propTypes = {
  shelves: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default BookPage;
