import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

class ShelvesPage extends Component {
  state = {
    shelfName: "",
    showNewShelfForm: false,
  };

  showForm = () => {
    this.setState({ showNewShelfForm: true });
  };

  handleInputChange = (e) => {
    this.setState({ shelfName: e.target.value });
  };

  addNewShelf = (e) => {
    e.preventDefault();
    this.props.onAddNewShelf(this.state.shelfName);
  };

  render() {
    const { books, shelves, onUpdateBook } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf, index) => (
            <Shelf
              key={shelf.name}
              books={books.filter((book) => book.shelf === shelf.name)}
              title={shelf.displayName}
              shelves={shelves}
              onUpdateBook={onUpdateBook}
            />
          ))}
        </div>
        <div>
          {!this.state.showNewShelfForm ? (
            <button onClick={this.showForm} className="btn-large">
              Add New Shelf
            </button>
          ) : (
            <form action="">
              <input
                onChange={this.handleInputChange}
                value={this.state.shelfName}
                type="text"
                placeholder="Shelf Name"
              />
              <button onClick={this.addNewShelf}>Add</button>
            </form>
          )}
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ShelvesPage;
