import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const ButtonGhost = ({ type, text, onPressed , disabled , design}) => {
    const className = `button-ghost`;
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

ButtonGhost.defaultProps = {
    type: "button",
    disabled: false,
    design : "primary",
    onPressed: () => {},
};

ButtonGhost.propTypes = {
    type: PropTypes.string,
    children: PropTypes.element,
    disabled: PropTypes.bool,
    onPressed: PropTypes.func,
    design: PropTypes.string
};

export default ButtonGhost;