import React from 'react';
import PropTypes from 'prop-types';
import '../../public/fonts.scss';
import './style.scss';

const Button = ({
  text, onPressed, componentType, disabled, design, size,
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    type={componentType}
    onClick={() => onPressed()}
    disabled={disabled}
    className={`button ${design} ${size}`}
  >
    { text }
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPressed: PropTypes.func,
  componentType: PropTypes.string,
  disabled: PropTypes.bool,
  design: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  componentType: 'button',
  size: 'medium',
  design: 'primary',
  onPressed: () => {},
  disabled: false,
};

export default Button;
