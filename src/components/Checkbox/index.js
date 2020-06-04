import React from 'react';
import PropTypes from 'prop-types';
import '../../public/fonts.scss';
import './style.scss';



const Checkbox = ({ type, disabled, checked }) => {
    return (
        <label className="container-checkbox">
            <input
                type={type}
                checked={checked}
                disabled={disabled}
            />
            <span className="checkmark"></span>
        </label>
    )
}

Checkbox.defaultProps = {
    type: "checkbox",
}

Checkbox.propTypes = {
    type: PropTypes.string,
    checked: PropTypes.string,
}

export default Checkbox;