import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./App.css";

// export default class App extends Component {
//     maxId = 100;
//
//     state = {
//         todoData: [
//             this.createTodoItem("Drink Coffee"),
//             this.createTodoItem("Learn React"),
//             this.createTodoItem("Learn Redux")
//         ]
//     };
//
//     createTodoItem(label) {
//         return {
//             label,
//             important: false,
//             done: false,
//             id: this.maxId++
//         };
//     }
//
//     deleteItem = id => {
//         this.setState(({todoData}) => {
//             const idx = todoData.findIndex(el => el.id === id);
//             const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
//             return {
//                 todoData: newArray
//             };
//         });
//     };
//
//     addTask = text => {
//         const newTask = this.createTodoItem(text);
//
//         this.setState(({todoData}) => {
//             const newArray = [...todoData, newTask];
//             return {
//                 todoData: newArray
//             };
//         });
//     };
//
//     toggleProperty(arr, id, propName) {
//         const idx = arr.findIndex(el => el.id === id);
//         const oldItem = arr[idx];
//         const newItem = {
//             ...oldItem,
//             [propName]: !arr[propName]
//         };
//         return [
//             ...arr.slice(0, idx),
//             newItem,
//             ...arr.slice(idx + 1)
//         ];
//     }
//
//
//     onToggleImportant = id => {
//         this.setState(({todoData}) => {
//             return {
//                 todoData: this.toggleProperty(todoData, id, 'important')
//             }
//         });
//     };
//
//     onToggleDone = id => {
//         this.setState(({todoData}) => {
//             return {
//                 todoData: this.toggleProperty(todoData, id, 'done')
//             }
//         });
//     };
//
//     render() {
//         const {todoData} = this.state;
//
//         const counterDoneTask = todoData.filter(el => el.done === true).length;
//         const counterToDoTask = todoData.filter(el => el.done === false).length;
//
//         return (
//             <div className="todo-app">
//                 <AppHeader toDo={counterToDoTask} done={counterDoneTask}/>
//                 <div className="top-panel d-flex">
//                     <SearchPanel/>
//                     <ItemStatusFilter/>
//                 </div>
//
//                 <TodoList
//                     todos={todoData}
//                     onDeleted={this.deleteItem}
//                     onToggleImportant={this.onToggleImportant}
//                     onToggleDone={this.onToggleDone}
//                 />
//                 <ItemAddForm addTask={this.addTask}/>
//             </div>
//         );
//     }
// }

export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem("Drink Tea"),
            this.createTodoItem("Learn React"),
            this.createTodoItem("Learn JS"),
            this.createTodoItem("Learn Redux")
        ]
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

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex(el => el.id === id);
        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !arr[propName]
        };
        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    }

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

    render() {
        const {todoData} = this.state;

        const counterDoneTask = todoData.filter(el => el.done === true).length;
        const counterToDoTask = todoData.filter(el => el.done === false).length;

        return (
            <div className="todo-app">
                <AppHeader toDo={counterToDoTask} done={counterDoneTask}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm addTask={this.addTask}/>
            </div>
        );
    }
}
