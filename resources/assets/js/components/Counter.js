import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div className="container">
                <p>{ this.state.count }</p>
            </div>
        );
    }
}

if (document.getElementById('counter')) {
    ReactDOM.render(<Counter />, document.getElementById('counter'));
}
