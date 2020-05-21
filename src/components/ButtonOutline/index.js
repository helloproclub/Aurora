import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const ButtonOutline = ({ type, text, onPressed , disabled , design ,size}) => {
    const className = `button-outline`;
    return (
        <button 
        type={type}
        onClick={ () => onPressed() }  
        className={`${className}-${design} ${size}` }
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
    size : "medium",
    onPressed: () => {},
};

ButtonOutline.propTypes = {
    type: PropTypes.string,
    children: PropTypes.element,
    disabled: PropTypes.bool,
    onPressed: PropTypes.func,
    design: PropTypes.string,
    size: PropTypes.string
};

export default ButtonOutline;
