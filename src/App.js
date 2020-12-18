import React, { Component } from "react";
import { Route } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import ShelvesPage from "./ShelvesPage";
import SearchPage from "./SearchPage";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends Component {
  state = {
    books: [{}],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    });
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => <ShelvesPage books={this.state.books} />} />
        <Route path="/search" render={() => <SearchPage books={this.state.books} />} />
      </div>
    );
  }
}

export default BooksApp;
