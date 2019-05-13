import React, {Component} from "react";
import "./ItemAddForm.css";

export default class ItemAddForm extends Component {
    state = {
        label: ""
    };

    onSubmit = event => {
        event.preventDefault();
        if (this.state.label) {
            this.props.addTask(this.state.label);
            this.setState({
                label: ""
            });
        }
    };

    onInputChange = event => {
        this.setState({
            label: event.target.value
        });
    };

    render() {
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Task Name"
                    onChange={this.onInputChange}
                    value={this.state.label}
                />
                <button className="btn btn-outline-secondary">Add Task</button>
            </form>
        );
    }
}
