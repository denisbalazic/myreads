import React, { Component } from "react";
import { Route } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import ShelvesPage from "./ShelvesPage";
import SearchPage from "./SearchPage";
import BookPage from "./BookPage";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends Component {
  state = {
    books: [],
    shelves: [
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
    ],
    isLoaded: false,
    error: null,
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({ isLoaded: true, books: books });
  }

  updateBook = (book) => {
    this.setState((prevState) => {
      const index = prevState.books.findIndex((b) => b.id === book.id);
      if (index === -1) {
        return { books: prevState.books.concat([book]) };
      }
      if (book.shelf === "none") {
        return { books: prevState.books.filter((b) => b.shelf !== "none") };
      }
      prevState.books[index] = book;
      return { books: prevState.books };
    });
    //TODO: Check if response is positive
    BooksAPI.update(book, book.shelf);
  };

  addShelf = (shelfName) => {
    this.setState((prevState) => ({
      shelves: prevState.shelves.concat([
        { name: shelfName.toLowerCase().trim(), displayName: shelfName },
      ]),
    }));
  };

  removeShelf = (shelfName) => {
    console.log(shelfName);
    this.setState((prevState) => ({
      shelves: prevState.shelves.filter((s) => s.name !== shelfName),
    }));
  };

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <ShelvesPage
                books={this.state.books}
                shelves={this.state.shelves}
                onUpdateBook={this.updateBook}
                onAddNewShelf={this.addShelf}
                onRemoveShelf={this.removeShelf}
              />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <SearchPage
                books={this.state.books}
                shelves={this.state.shelves}
                onUpdateBook={this.updateBook}
              />
            )}
          />
          <Route
            path="/books/:bookId"
<<<<<<< HEAD
            render={({ match }) => {
              return (
                <BookPage
                  match={match}
                  shelves={this.state.shelves}
=======
            render={({ match, location }) => {
              return (
                <BookPage
                  location={location}
                  match={match}
                  shelves={shelves}
>>>>>>> master
                  onUpdateBook={this.updateBook}
                />
              );
            }}
          />
        </div>
      );
    }
  }
}

export default BooksApp;
