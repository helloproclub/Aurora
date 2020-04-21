import React from 'react';
import PropTypes from 'prop-types';
import '../../public/fonts.scss';
import './style.scss';

export default class BackgroundColor extends React.Component {
    static propTypes = {
        design: PropTypes.string
    }

    static defaultProps = {
        design: "background-white"
    }

    render() {
        const { design } = this.props
        return (
            <div
                className={`pallete ${design}`}
            >
            </div>
        )
    }
}