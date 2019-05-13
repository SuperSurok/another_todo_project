import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./App.css";

export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem("Drink Tea"),
            this.createTodoItem("Learn React"),
            this.createTodoItem("Learn JS"),
            this.createTodoItem("Learn Redux")
        ],
        inputValue: "",
        filter: 'all'
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
    }

    addTask = text => {
        this.setState(({todoData}) => {
            const newTask = this.createTodoItem(text);
            const newArray = [...todoData, newTask];
            return {
                todoData: newArray
            };
        });
    };

    deleteItem = id => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex(el => el.id === id);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            };
        });
    };

    onToggleImportant = id => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, "important")
            };
        });
    };

    onToggleDone = id => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, "done")
            };
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex(el => el.id === id);
        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !arr[propName]
        };
        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    }

    onSearchTask = event => {
        let text = event.target.value;
        this.setState({
            inputValue: text
        });
    };

    search = (arr, text) => {
        return arr.filter(el => el.label.toLowerCase().indexOf(text) !== -1)
    };

    filter = (arr, status) => {
        switch (status) {
            case 'all':
                return arr;
            case 'done':
                return arr.filter(el => el.done === true);
            case 'active':
                return arr.filter(el => el.done === false);
            default:
                return arr;
        }
    };

    onFilterChange = (filter) => {
        this.setState({filter})
    };

    render() {
        const {todoData, inputValue, filter} = this.state;

        let search = this.filter(this.search(todoData, inputValue), filter);

        const counterDoneTask = todoData.filter(el => el.done === true).length;
        const counterToDoTask = todoData.filter(el => el.done === false).length;



        return (
            <div className="todo-app">
                <AppHeader toDo={counterToDoTask} done={counterDoneTask}/>
                <div className="top-panel d-flex">
                    <SearchPanel
                        inputValue={inputValue}
                        onSearchTask={this.onSearchTask}/>
                    <ItemStatusFilter filter={filter}
                    onFilterChange={this.onFilterChange}/>
                </div>

                <TodoList
                    todos={search}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm addTask={this.addTask}/>
            </div>
        );
    }
}
