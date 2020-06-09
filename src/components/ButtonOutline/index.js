import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const ButtonOutline = ({text, onPressed , disabled , design}) => {
    const className = `button-outline`;
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

ButtonOutline.defaultProps = {
    disabled: false,
    design : "primary",
    onPressed: () => {},
};

ButtonOutline.propTypes = {
    type: PropTypes.string,
    children: PropTypes.element,
    disabled: PropTypes.bool,
    onPressed: PropTypes.func,
    design: PropTypes.string
};
export default ButtonOutline;
