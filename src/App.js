import React, { Component } from 'react';
import User from './Users'
class App extends Component {
    render() {
    return (
        <div>
            {this.props.children}
        </div>
        );
    }
}

export default App;
