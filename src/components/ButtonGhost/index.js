import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const ButtonGhost = ({ type, text, onPressed , disabled , design ,size}) => {
    const className = `button-ghost`;
    return (
        <button 
        type={type}
        onClick={ () => onPressed() }  
        className={`${className} ${design} ${size}` }
        disabled={disabled}
        >
            {text}
    </button>
    );
};

ButtonGhost.defaultProps = {
    type: "button",
    disabled: false,
    design : "primary",
    size : "medium",
    onPressed: () => {},
};

ButtonGhost.propTypes = {
    type: PropTypes.string,
    children: PropTypes.element,
    disabled: PropTypes.bool,
    onPressed: PropTypes.func,
    design: PropTypes.string,
    size: PropTypes.string
};

export default ButtonGhost;
