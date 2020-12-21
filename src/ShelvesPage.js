import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Shelf from "./Shelf";
import NewShelfForm from "./NewShelfForm";

class ShelvesPage extends Component {
  state = {
    showNewShelfForm: false,
  };

  toggleForm = () => {
    this.setState((prevState) => ({ showNewShelfForm: !prevState.showNewShelfForm }));
  };

  render() {
    const { books, shelves, onUpdateBook, onRemoveShelf, onAddNewShelf } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf) => (
            <Shelf
              key={shelf.name}
              books={books.filter((book) => book.shelf === shelf.name)}
              shelf={shelf}
              shelves={shelves}
              onUpdateBook={onUpdateBook}
              onRemoveShelf={onRemoveShelf}
            />
          ))}
        </div>
        {/************ Add new shelf ****************/}
        <div className="new-shelf-form">
          <button onClick={this.toggleForm} className="btn-large">
            {!this.state.showNewShelfForm ? "Add New Shelf" : "Hide"}
          </button>
          {!this.state.showNewShelfForm ? null : (
            <NewShelfForm onAddNewShelf={onAddNewShelf} hideForm={this.toggleForm} />
          )}
        </div>
        {/* **************************************** */}
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

ShelvesPage.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default ShelvesPage;
