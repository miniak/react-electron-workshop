// react
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
    public render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}

function render() {
    ReactDOM.render(<App/>, document.getElementById('root'));
}

document.addEventListener('DOMContentLoaded', render, { once: true });
