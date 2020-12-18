import React, { Component } from "react";
import { Route } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import ShelvesPage from "./ShelvesPage";
import SearchPage from "./SearchPage";
// import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends Component {
  state = {};

  render() {
    return (
      <div>
        <Route exact path="/" render={() => <ShelvesPage books={this.state.books} />} />
        <Route path="/search" render={() => <SearchPage />} />
      </div>
    );
  }
}

export default BooksApp;
