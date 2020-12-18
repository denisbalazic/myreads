import React, { Component } from "react";

class Selector extends Component {
  updateShelf = (e) => {
    const book = this.props.book;
    book.shelf = e.target.value;
    this.props.onUpdateBook(book);
  };

  render() {
    return (
      //TODO: Refactor selected options in DRY manner (loop through shelves?)
      <div className="book-shelf-changer">
        <select onChange={(e) => this.updateShelf(e)}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading" selected={this.props.book.shelf === "currentlyReading" ? true : null}>
            Currently Reading
          </option>
          <option value="wantToRead" selected={this.props.book.shelf === "wantToRead" ? true : null}>
            Want to Read
          </option>
          <option value="read" selected={this.props.book.shelf === "read" ? true : null}>
            Read
          </option>
          <option value="none" selected={!this.props.book.shelf ? true : null}>
            None
          </option>
        </select>
      </div>
    );
  }
}

export default Selector;
