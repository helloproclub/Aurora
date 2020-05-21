import React from 'react';
import PropTypes from 'prop-types';
import '../../public/fonts.scss';
import './style.scss';

const ButtonGroup = ({ type, text, onPressed, disabled, size, position }) => {
    return (
        <button
            type={type}
            onClick={() => onPressed()}
            disabled={disabled}
            className={`button-group ${size} ${'button-group-'+position}`}
        >
            {text}
        </button>
    );
};

ButtonGroup.defaultProps = {
    type: "button",
    disabled: false,
    onPressed: () => { alert('Di-kelik')},
    size: "medium",
    position: "middle",
};

ButtonGroup.propTypes = {
    type: PropTypes.string,
    children: PropTypes.element,
    disabled: PropTypes.bool,
    onPressed: PropTypes.func,
    size: PropTypes.string,
    position: PropTypes.string,
};

export default ButtonGroup;
