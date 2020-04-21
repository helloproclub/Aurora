import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const ButtonFilled = ({ type, children, disabled, ...rest }) => {
  const className = `button button-filled`;
  return (
    <button type={type} className={className} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

ButtonFilled.defaultProps = {
  type: "button",
  disabled: false,
};

ButtonFilled.propTypes = {
  type: PropTypes.string,
  children: PropTypes.element,
  disabled: PropTypes.bool,
  rest: PropTypes.object,
};

export default ButtonFilled;
