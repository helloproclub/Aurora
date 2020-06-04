import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const ButtonGhost = ({ text, onPressed , disabled , design}) => {
    const className = `button-ghost`;
    return (
        <button 
        onClick={ () => onPressed() }  
        className={`btn ${className}-${design}` }
        disabled={disabled}
        >
            {text}
        </button>
    );
};

ButtonGhost.defaultProps = {
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