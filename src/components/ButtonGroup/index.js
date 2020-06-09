import React from 'react';
import PropTypes from 'prop-types';
import '../../public/fonts.scss';
import './style.scss';

const ButtonGroup = ({ type, text, onPressed, disabled, position }) => {
    return (
        <button
            onClick={() => onPressed()}
            disabled={disabled}
            className={`button-group ${'button-group-'+position}`}
        >
            {text}
        </button>
    );
};

ButtonGroup.defaultProps = {
    disabled: false,
    onPressed: () => {},
    position: "middle",
};

ButtonGroup.propTypes = {
    children: PropTypes.element,
    disabled: PropTypes.bool,
    onPressed: PropTypes.func,
    size: PropTypes.string,
    position: PropTypes.string,
};

export default ButtonGroup;
