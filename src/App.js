import React, { Component } from "react";
import { Route } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import ShelvesPage from "./ShelvesPage";
import SearchPage from "./SearchPage";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

const shelves = [
  {
    name: "currentlyReading",
    displayName: "Currently Reading",
  },
  {
    name: "wantToRead",
    displayName: "Want To Read",
  },
  {
    name: "read",
    displayName: "Read",
  },
];

class BooksApp extends Component {
  state = {
    books: [{}],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    });
  }

  updateBook = (book) => {
    this.setState((prevState) => {
      const index = prevState.books.findIndex((b) => b.id === book.id);
      if (index === -1) {
        return { books: prevState.books.concat([book]) };
      }
      prevState.books[index] = book;
      return { books: prevState.books };
    });
    //TODO: Check if response is positive
    BooksAPI.update(book, book.shelf);
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => <ShelvesPage books={this.state.books} shelves={shelves} onUpdateBook={this.updateBook} />}
        />
        <Route
          path="/search"
          render={() => <SearchPage books={this.state.books} shelves={shelves} onUpdateBook={this.updateBook} />}
        />
      </div>
    );
  }
}

export default BooksApp;
