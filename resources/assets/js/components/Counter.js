import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Counter extends Component {
    render() {
        return (
            <div className="container">
                <p>Counter Component</p>
            </div>
        );
    }
}

if (document.getElementById('counter')) {
    ReactDOM.render(<Counter />, document.getElementById('counter'));
}
