import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchInput from "./SearchInput";
import SearchDisplay from "./SearchDisplay";
import * as BooksAPI from "./BooksAPI";

export default function SearchPage(props) {
  const { books, shelves, onUpdateBook } = props;

  const [query, setQuery] = useState("");
  const [foundBooks, setFoundBooks] = useState([]);
  const [invalidQuery, setInvalidQuery] = useState(false);

  const updateQuery = (e) => {
    const query = e.target.value;
    setQuery(query);
    if (query === "") {
      setFoundBooks([]);
      return;
    }
    BooksAPI.search(query).then((books) => {
      if (books.error) {
        setFoundBooks([]);
        setInvalidQuery(true);
      } else {
        setFoundBooks(books);
        setInvalidQuery(false);
      }
    });
  };

  return (
    <div className="SearchPage">
      <SearchInput query={query} onInputChange={updateQuery} />
      {foundBooks && foundBooks.length > 0 && (
        <SearchDisplay
          books={books}
          foundBooks={foundBooks}
          shelves={shelves}
          onUpdateBook={onUpdateBook}
        />
      )}
      <p>{invalidQuery ? "Invalid query" : null}</p>
    </div>
  );
}

SearchPage.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};
