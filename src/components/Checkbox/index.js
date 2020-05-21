import React from 'react';
import PropTypes from 'prop-types';
import '../../public/fonts.scss';
import './style.scss';



const Checkbox = ({ text, type, onPressed, disabled }) => {
    return (
        <div>
            <button
                type={type}
                onClick={() => onPressed()}
                disabled={disabled}
                className={`button-text`}
            >
                {text}
            </button>
        </div>
    )
}

Checkbox.defaultProps = {
    type: "button",
    disabled: false,
    onPressed: () => {
        alert('Selamat Datang')
    },
}

Checkbox.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    onPressed: PropTypes.func,
}

export default Checkbox;