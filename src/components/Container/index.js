import React from 'react';
import PropTypes from 'prop-types';
import '../../public/fonts.scss';
import './style.scss';

export default class Container extends React.Component {
    static propTypes = {
        backgroundColor: PropTypes.string
    }

    static defaultProps = {
        backgroundColor: "background-default"
    }

    render() {
        const { backgroundColor } = this.props
        return (
            <div
                className={`pallete ${backgroundColor}`}
            >
            </div>
        )
    }
}