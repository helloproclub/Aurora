import React from 'react';
import PropTypes from 'prop-types';
import '../../public/style.scss'
import './style.scss';

class HelloWorld extends React.Component {
    // declare property with proptype
    static propTypes = {
        name: PropTypes.string.isRequired
    }

    render() {
        return (
            <h1 className="container">Hello <span className="name">{ this.props.name }</span></h1>
        )
    }
}

export default HelloWorld;