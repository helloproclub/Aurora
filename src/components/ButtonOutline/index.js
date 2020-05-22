import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const ButtonOutline = ({ type, text, onPressed , disabled , design}) => {
    const className = `button-outline`;
    return (
        <button 
        type={type}
        onClick={ () => onPressed() }  
        className={`btn ${className}-${design}` }
        disabled={disabled}
        >
            {text}
    </button>
    );
};

ButtonOutline.defaultProps = {
    type: "button",
    disabled: false,
    design : "primary",
    onPressed: () => {alert('Oke Oce')},
};

ButtonOutline.propTypes = {
    type: PropTypes.string,
    children: PropTypes.element,
    disabled: PropTypes.bool,
    onPressed: PropTypes.func,
    design: PropTypes.string
};
