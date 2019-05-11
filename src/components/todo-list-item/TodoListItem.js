import React, { Component } from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };

  onMarkImportantClick = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      };
    });
  };

  render() {
    const { done, important } = this.state;
    const { label, onDeleted } = this.props;

    return (
      <span className={done ? "todo-list-item done" : "todo-list-item"}>
        <span
          className={
            important
              ? "todo-list-item-label important"
              : "todo-list-item-label"
          }
          onClick={this.onLabelClick}
        >
          {label}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportantClick}
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
