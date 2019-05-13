import React, {Component} from "react";
import "./SearchPanel.css";

export default class SearchPanel extends Component {

    render() {
        const {onSearchTask, inputValue} = this.props;
        return (
            <div>
                <input
                type="text"
                className="form-control search-input"
                placeholder="Type to search"
                value={inputValue}
                onChange={onSearchTask}
            /></div>
        );
    }
}
