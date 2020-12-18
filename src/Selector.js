import React, { Component } from "react";

class Selector extends Component {
  updateShelf = (e) => {
    const book = this.props.book;
    book.shelf = e.target.value;
    this.props.onUpdateBook(book);
  };

  render() {
    const { book, shelves } = this.props;
    console.log(shelves);
    return (
      //TODO: Refactor selected options in DRY manner (loop through shelves?)
      <div className="book-shelf-changer">
        <select onChange={(e) => this.updateShelf(e)}>
          <option value="move" disabled>
            Move to...
          </option>
          {shelves.map((shelf) => (
            <option value={shelf.name} selected={book.shelf === shelf.name ? true : null}>
              {shelf.displayName}
            </option>
          ))}
          <option value="none" selected={!this.props.book.shelf ? true : null}>
            None
          </option>
        </select>
      </div>
    );
  }
}

export default Selector;
