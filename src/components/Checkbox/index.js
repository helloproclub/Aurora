import React from 'react';
import PropTypes from 'prop-types';
import '../../public/fonts.scss';
import './style.scss';



const Checkbox = ({ text, type, disabled, checked }) => {
    return (
        <label className="container-checkbox">{text}
            <input
                type={type}
                checked={checked}
                value={text}
                disabled={disabled}
            />
            <span className="checkmark"></span>
        </label>
    )
}

Checkbox.defaultProps = {
    text: "Value",
    type: "checkbox",
}

Checkbox.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    checked: PropTypes.string,
}

export default Checkbox;