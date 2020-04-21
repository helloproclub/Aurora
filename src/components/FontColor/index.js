import React from 'react';
import PropTypes from 'prop-types';
import '../../public/fonts.scss';
import './style.scss';

export default class FontColor extends React.Component {
    static propTypes = {
        fontColor: PropTypes.string
    }

    static defaultProps = {
        fontColor: "default"
    }

    render() {
        const { fontColor } = this.props
        return (
            <div
                className={`pallete ${fontColor}`}
            >
                {this.props.fontColor}
            </div>
        )
    }
}