import React, { Component } from "react";
import "./ItemAddForm.css";

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTask(this.state.label)
    };

    render() {
    return (
      <form className="item-add-form d-flex"
      onSubmit={this.onSubmit}>
            <input
                type="text"
                className="form-control"
                placeholder="Task Name"
                onChange={this.onLabelChange}
            />
            <button
            className="btn btn-outline-secondary"
          >
            Add Task
          </button>

      </form>
    );
  }
}
