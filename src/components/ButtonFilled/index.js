import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const ButtonFilled = ({ type, children, disabled, onPressed, ...rest }) => {
  const className = `button button-filled`;
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={() => onPressed()}
      {...rest}
    >
      {children}
    </button>
  );
};

ButtonFilled.defaultProps = {
  type: "button",
  onPressed: () => { },
  disabled: false,
};

ButtonFilled.propTypes = {
  type: PropTypes.string,
  children: PropTypes.element,
  disabled: PropTypes.bool,
  onPressed: PropTypes.func,
  rest: PropTypes.object,
};

export default ButtonFilled;
