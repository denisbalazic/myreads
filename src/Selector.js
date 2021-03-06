import React from "react";
import PropTypes from "prop-types";

export default function Selector(props) {
  const { book, shelves, onUpdateBook } = props;

  const updateShelf = (e) => {
    book.shelf = e.target.value;
    onUpdateBook(book);
  };

  return (
    //TODO: Refactor selected options in DRY manner (loop through shelves?)
    <div className="book-shelf-changer">
      <select value={book.shelf || "none"} onChange={(e) => updateShelf(e)}>
        <option value="move" disabled>
          Move to...
        </option>
        {shelves.map((shelf) => (
          <option key={shelf.name} value={shelf.name}>
            {shelf.displayName}
          </option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  );
}

Selector.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};
