import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form"

import "./App.css";

export default class App extends Component {

    maxId = 100;

    state = {
    todoData: [
      { id: 1, label: "Drink Coffee", important: false },
      { id: 2, label: "Learn React", important: true },
      { id: 3, label: "Learn Redux", important: true }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray
      };
    });
  };

  addTask = (text) => {

      const newTask = {
          label: text,
          important: false,
          id: this.maxId++
      };

      this.setState(({todoData}) => {
          const newArray = [...todoData, newTask];
          return {
              todoData: newArray
          }
      });

  };

  render() {
    const { todoData } = this.state;

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={todoData} onDeleted={this.deleteItem} />
        <ItemAddForm addTask={this.addTask}/>
      </div>
    );
  }
}
