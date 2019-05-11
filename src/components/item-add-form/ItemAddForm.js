import React, { Component } from "react";
import "./ItemAddForm.css";

export default class ItemAddForm extends Component {
  render() {
    const { addTask } = this.props;
    return (
      <div className="item-add-form">
        <div className="bottom-panel">
          <button
            className="btn btn-outline-secondary new-todo-label"
            onClick={() => addTask("Hello")}
          >
            Add Task
          </button>
        </div>
      </div>
    );
  }
}
