import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const ButtonGhost = ({ type, text, onPressed , disabled}) => {
    const className = `button-ghost`;
    return (
        <button 
        type={type}
        onClick={ () => onPressed() }  
        className={className}
        disabled={disabled}
        >
            {text}
    </button>
    );
};

ButtonGhost.defaultProps = {
    type: "button",
    disabled: false,
    onPressed: () => { alert('bolb4lgan')},
};

ButtonGhost.propTypes = {
    type: PropTypes.string,
    children: PropTypes.element,
    disabled: PropTypes.bool,
    onPressed: PropTypes.func,
};

export default ButtonGhost;
