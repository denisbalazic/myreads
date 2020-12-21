import React, { Component } from "react";
import PropTypes from "prop-types";

class NewShelfForm extends Component {
  state = {
    newShelfName: "",
  };

  handleInputChange = (e) => {
    this.setState({ newShelfName: e.target.value });
  };

  addNewShelf = (e) => {
    e.preventDefault();
    this.props.onAddNewShelf(this.state.newShelfName);
    this.props.hideForm();
    this.setState({ newShelfName: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addNewShelf} action="">
          <input
            onChange={this.handleInputChange}
            value={this.state.newShelfName}
            type="text"
            placeholder="Shelf Name"
          />
        </form>
      </div>
    );
  }
}

NewShelfForm.propTypes = {
  onAddNewShelf: PropTypes.func.isRequired,
  hideForm: PropTypes.func.isRequired,
};

export default NewShelfForm;
