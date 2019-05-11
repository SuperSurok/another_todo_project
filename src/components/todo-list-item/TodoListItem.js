import React, { Component } from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {

  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

    return (
      <span className={done ? "todo-list-item done" : "todo-list-item"}>
        <span
          className={
            important
              ? "todo-list-item-label important"
              : "todo-list-item-label"
          }
          onClick={onToggleDone}
        >
          {label}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash" />
        </button>
      </span>
    );
  }
}
