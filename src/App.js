import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import ShelvesPage from "./ShelvesPage";
import SearchPage from "./SearchPage";
import BookPage from "./BookPage";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

/**
 * Shelves are here so I can easily add some more
 */
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

export default function App() {
  const [books, setBooks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(async () => {
    const books = await BooksAPI.getAll();
    setBooks(books);
    setIsLoaded(true);
  });

  const updateBook = (book) => {
    setBooks((prevState) => {
      const index = prevState.findIndex((b) => b.id === book.id);
      if (index === -1) {
        return prevState.concat([book]);
      }
      if (book.shelf === "none") {
        return prevState.filter((b) => b.shelf !== "none");
      }
      prevState[index] = book;
      return prevState;
    });
    BooksAPI.update(book, book.shelf);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => <ShelvesPage books={books} shelves={shelves} onUpdateBook={updateBook} />}
        />
        <Route
          path="/search"
          render={() => <SearchPage books={books} shelves={shelves} onUpdateBook={updateBook} />}
        />
        <Route
          path="/books/:bookId"
          render={({ match, location }) => {
            return (
              <BookPage
                location={location}
                match={match}
                shelves={shelves}
                onUpdateBook={updateBook}
              />
            );
          }}
        />
      </div>
    );
  }
}
