import React from 'react';
import './style.scss';

class HelloWorld extends React.Component {
    render() {
        return (
            <h1 className="container">Hello <span className="name">{ this.props.name }</span></h1>
        )
    }
}

export default HelloWorld;