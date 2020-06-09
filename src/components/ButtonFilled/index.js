import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ButtonFilled = ({
  type, children, state, disabled, onPressed, ...rest
}) => {
  const className = `button button-filled button-filled-${state}`;
  return (
    <button
      type="button"
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
  type: 'button',
  onPressed: () => { },
  disabled: false,
};

ButtonFilled.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onPressed: PropTypes.func,
  children: PropTypes.node,
  state: PropTypes.string,
};

export default ButtonFilled;
