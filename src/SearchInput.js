import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class SearchInput extends Component {
  render() {
    const { query, onInputChange } = this.props;
    return (
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input
            value={query}
            onChange={(e) => onInputChange(e)}
            type="text"
            placeholder="Search by title or author"
          />
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  query: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SearchInput;
