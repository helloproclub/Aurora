import React from 'react';
import PropTypes from 'prop-types';
import '../../public/fonts.scss';
import './style.scss';

const ButtonGroup = ({text, onPressed, disabled, size, position }) => {
    return (
        <button
            onClick={() => onPressed()}
            disabled={disabled}
            className={`button-group ${size} ${'button-group-'+position}`}
        >
            {text}
        </button>
    );
};

ButtonGroup.defaultProps = {
    disabled: false,
    onPressed: () => { alert('Di-kelik')},
    size: "medium",
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
