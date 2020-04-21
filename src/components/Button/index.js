import React from "react";
import PropTypes from "prop-types";
import "../../public/fonts.scss";
import "./style.scss";

export default class Button extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPressed: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    design: PropTypes.string,
    size: PropTypes.string,
  };

  static defaultProps = {
    type: "button",
    size: "medium",
    design: "primary",
    onPressed: () => {},
    disabled: false,
  };

  render() {
    const { text, type, onPressed, disabled, design, size } = this.props;
    return (
      <button
        type={type}
        onClick={() => onPressed()}
        disabled={disabled}
        className={`button ${design} ${size}`}
      >
        {text}
      </button>
    );
  }
}
